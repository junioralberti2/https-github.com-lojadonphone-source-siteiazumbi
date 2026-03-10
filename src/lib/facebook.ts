declare global {
  interface Window {
    fbq: any
    _fbq: any
  }
}

export const FB_PIXEL_ID = '1204931778279458'
export const FB_CAPI_TOKEN =
  'EAF1Qz1UQG0cBQoqQ5jldOGr9X99j5QHDSMqUlQdnnhZCl4H2xqil5P4gSExcRfoTqqCpkRZByzTrrNxocGLWhpyBnCzUHkUiggjPS3TeKzQwCavabEaSZB8l71mFQgRZCBL9D9vPXZAfjHpfbDVuwJAil8ds5GIoNTxthZAseNuVnkPWMZADEvIe1RfBGMUCwZDZD'

export const initFacebookPixel = () => {
  if (typeof window === 'undefined') return
  if (window.fbq) return

  const f = window as any

  if (f.fbq) return

  const n: any = function (...args: any[]) {
    if (n.callMethod) {
      n.callMethod(...args)
    } else {
      n.queue.push(args)
    }
  }

  f.fbq = n
  f._fbq = n

  n.push = n
  n.loaded = true
  n.version = '2.0'
  n.queue = []

  const t = document.createElement('script')
  t.async = true
  t.src = 'https://connect.facebook.net/en_US/fbevents.js'

  const head = document.head || document.getElementsByTagName('head')[0]
  if (head) {
    head.appendChild(t)
  }

  window.fbq('init', FB_PIXEL_ID)
}

export const trackEvent = async (
  eventName: string,
  params: Record<string, any> = {},
) => {
  const eventId =
    typeof crypto !== 'undefined' && crypto.randomUUID
      ? crypto.randomUUID()
      : 'evt_' + Date.now() + Math.random().toString(36).substring(2, 11)

  if (window.fbq) {
    window.fbq('track', eventName, params, { eventID: eventId })
  }

  try {
    const eventData = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_id: eventId,
          action_source: 'website',
          event_source_url: window.location.href,
          user_data: {
            client_user_agent: navigator.userAgent,
          },
          custom_data: params,
        },
      ],
      access_token: FB_CAPI_TOKEN,
    }

    await fetch(`https://graph.facebook.com/v19.0/${FB_PIXEL_ID}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventData),
      keepalive: true,
    })
  } catch (error) {
    console.warn('Facebook CAPI Error:', error)
  }
}
