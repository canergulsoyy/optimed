import createMiddleware from "next-intl/middleware";
import { routing } from "./src/i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Next.js 16: matcher değeri statik string/array olmalı
  // Tüm diller için kök ve locale prefix'li path'leri eşle
  matcher: ["/", "/(tr|en|bg)/:path*"],
};
