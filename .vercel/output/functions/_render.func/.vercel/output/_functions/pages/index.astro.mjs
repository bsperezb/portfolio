/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as addAttribute, b as renderHead, e as renderSlot, f as createAstro, m as maybeRenderHead, g as renderComponent } from '../chunks/astro/server_yGO1Ra-i.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/smkmacbookair/Documents/PortafolioAstro/portafolioAstro/src/layouts/Layout.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="fixed w-full flex justify-center items-center mt-4"> <nav class="flex justify-around container rounded-full border-2
	border-primary bg-tertiary text-primary max-w-md
		transition-all duration-300 hover:scale-110"> <a href="/" class="text-xl hover:text-lg transition-all
			duration-300">Experiencia
</a> <a href="/" class="text-xl hover:text-lg transition-all duration-300">Proyectos</a> <a href="/" class="text-xl hover:text-lg transition-all duration-300">Sobre mi</a> </nav> </header> `;
}, "/Users/smkmacbookair/Documents/PortafolioAstro/portafolioAstro/src/components/Header.astro", void 0);

const $$Banner = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="container lg:max-w-4xl md:max-w-2xl mt-20"> <div class="container max-w-xl flex flex-col  justify-center gap-4"> <div class="flex items-center gap-4"> <!-- Image and redirect to linkeding --> <img class="w-24 h-24 rounded-full" src="https://avatars.githubusercontent.com/u/83848297?v=4" alt="Brayan Perez avatar"> <a href="">Open to work</a> </div> <h1 class="text-lg">Hola, Soy Brayan</h1> <p>
I'm Brayan Pérez, a front-end developer and integration specialist with
			over 3 years of experience in web development and 2 years as a freelance
			developer and data analyst. While pursuing my degree in Mechanical
			Engineering, I’ve developed a passion for software development and data
			analysis.
</p> <nav class="flex gap-x-4"> <a href="/"> <!-- svg image --> <p>Contact me</p> </a> <a href="/"> <!-- svg image --> <p>LinkedIn</p> </a> </nav> </div> </section>`;
}, "/Users/smkmacbookair/Documents/PortafolioAstro/portafolioAstro/src/components/Banner.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Banner", $$Banner, {})} ` })} `;
}, "/Users/smkmacbookair/Documents/PortafolioAstro/portafolioAstro/src/pages/index.astro", void 0);

const $$file = "/Users/smkmacbookair/Documents/PortafolioAstro/portafolioAstro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
