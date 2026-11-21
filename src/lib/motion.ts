/** Curva de easing padrão do site (saída suave). */
export const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Robôs de busca e ferramentas de inspeção não rolam a página nem esperam animações.
 * Para eles o conteúdo já nasce visível; o texto é o mesmo, só sem a animação de entrada.
 */
export const IS_CRAWLER =
  typeof navigator !== "undefined" &&
  /googlebot|google-inspectiontool|bingbot|duckduckbot|yandex|baiduspider|lighthouse|headlesschrome|gptbot|claudebot|perplexity/i.test(
    navigator.userAgent,
  );

/** Faz o transform de elementos SVG girar/escalar a partir do próprio centro. */
export const SVG_ORIGIN = { transformBox: "fill-box", transformOrigin: "center" } as const;
