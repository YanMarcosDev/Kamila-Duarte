/**
 * ÃšNICO ARQUIVO A EDITAR.
 * Troque foto, nome, descriÃ§Ã£o e os dois links aqui.
 */
export const siteConfig = {
  name: "Kamila Duarte",
  description:
    "âœ¨ ConteÃºdo exclusivo â€¢ Acesso privado â€¢ Apenas para maiores de 18 anos",
  /**
   * FOTO DE PERFIL â€” SUBSTITUA A URL ABAIXO PELA FOTO DEFINITIVA DA CRIADORA.
   * (Ã© o Ãºnico lugar onde a imagem Ã© definida)
   */
  photo: "/kamila-duarte.jpg",
  seoTitle: "Kamila Duarte â€” Links Oficiais",
  seoDescription:
    "Acesse os canais oficiais de Kamila Duarte: Telegram e Privacy. ConteÃºdo exclusivo +18.",
  links: {
    // Substitua pelas URLs reais
    telegram: "https://telegram.me/KamilaDuartebot",
    privacy: "https://privacy.com.br/@min_montebelo",
  },
  turnstile: {
    /**
     * Chave pÃºblica (site key) do Cloudflare Turnstile.
     * Defina VITE_TURNSTILE_SITE_KEY ou troque o valor abaixo.
     * O padrÃ£o Ã© a chave de teste da Cloudflare (sempre aprova).
     */
    siteKey:
      import.meta.env.VITE_TURNSTILE_SITE_KEY ?? "1x00000000000000000000AA",
    /** DuraÃ§Ã£o da sessÃ£o verificada, em horas. */
    sessionHours: 6,
  },
} as const;

