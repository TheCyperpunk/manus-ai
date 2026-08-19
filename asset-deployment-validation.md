# Vercel Asset-Path Validation

## Diagnosis

The Vercel deployment could not serve the Manus preview-only `/manus-storage/` paths. This affected the hero portrait, the header signal mark, the favicon, and the Devfolio and Unstop profile marks.

## Replacement URLs

| Asset | Verified public URL | HTTP result |
|---|---|---|
| Portrait | `https://files.manuscdn.com/user_upload_by_module/session_file/310519663887738612/rCAjccQntCyRZUup.png` | `200 image/png` |
| Signal mark and favicon | `https://files.manuscdn.com/user_upload_by_module/session_file/310519663887738612/wEnIIYaJsgZXDlJY.png` | `200 image/png` |
| Devfolio mark | `https://files.manuscdn.com/user_upload_by_module/session_file/310519663887738612/ieGvcSDjqXCVPSYy.svg` | `200 image/svg+xml` |
| Unstop mark | `https://files.manuscdn.com/user_upload_by_module/session_file/310519663887738612/TOhXqiCHDYslvYio.svg` | `200 image/svg+xml` |

## Build validation

The client source contains no remaining `/manus-storage/` reference. TypeScript and the production build completed successfully after the asset replacement. A local browser capture confirmed the portrait, header mark, and profile marks render with the updated URLs.
