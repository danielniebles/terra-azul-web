import { headers } from 'next/headers'
import { userAgent } from 'next/server'

export async function isMobileDevice(): Promise<boolean> {
  const headerList = await headers()
  const { device } = userAgent({ headers: headerList })
  return device.type === 'mobile' || device.type === 'tablet'
}

const IMAGEKIT_BASE = 'https://ik.imagekit.io/wbjodg09y/'

export function serviceImageUrl(slug: string, filename: string): string {
  return `${IMAGEKIT_BASE}/services/${slug}/${filename}`
}
