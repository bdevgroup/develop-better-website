import TemplatePreview from "@/components/TemplatePreview";
import { SiteVitrineModels } from "@/constants";

export function generateStaticParams() {
  return [
    { slug: "site-gym" },
    { slug: "site-it" },
    { slug: "site-cafe" },
    { slug: "site-ai" },
    { slug: "site-app" },
    { slug: "site-blog-demo" },
    { slug: "site-business" },
    { slug: "site-charity" },
    { slug: "site-christmas" },
    { slug: "site-classic-app" },
    { slug: "site-classic-business" },
    { slug: "site-classic-saas" },
    { slug: "site-modern-saas" },
    { slug: "site-construction" },
  ];
}

const page = async (props: { params: Promise<{ slug: string }> }) => {
  const params = await props.params;
  const templateSlug = params.slug;
  const templateObject =
    SiteVitrineModels.find((s) => s.slug === templateSlug) || undefined;
  return (
    <>
      <TemplatePreview model={templateObject!} config={true} />
    </>
  );
};

export default page;
