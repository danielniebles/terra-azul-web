import { headers } from 'next/headers'
import { userAgent } from 'next/server'

export async function isMobileDevice(): Promise<boolean> {
  const headerList = await headers()
  const { device } = userAgent({ headers: headerList })
  return device.type === 'mobile' || device.type === 'tablet'
}
