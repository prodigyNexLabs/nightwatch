import { useSearchParams } from 'react-router-dom'

/**
 * Detects if the page is loaded inside a mobile app webview.
 * Pass `?embedded=1` from iOS/Android to hide header and footer.
 */
export const useEmbeddedMode = () => {
  const [searchParams] = useSearchParams()
  return searchParams.get('embedded') === '1'
}
