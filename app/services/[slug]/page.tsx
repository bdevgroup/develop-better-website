import BreadcrumbHeader from "@/components/BreadcrumbHeader";
import FAQSection from "@/components/pageDetail/FAQSection";
import FeaturesSection from "@/components/pageDetail/FeaturesSection";
import ImageTextCard from "@/components/pageDetail/ImageTextCard";
import { Services } from "@/constants";
import React from "react";
import urlSlug from "url-slug";

export function generateStaticParams() {
  return [
    { slug: urlSlug("Site vitrine et applications") },
    { slug: urlSlug("Réseau sociaux") },
    { slug: urlSlug("Maintenance applicative") },
    { slug: urlSlug("Ecommerce") },
    { slug: urlSlug("Intelligence artificielle") },
    { slug: urlSlug("Sourcing") },
  ];
}
interface ParamsProps {
  slug: string;
}
const page = async (props: { params: Promise<ParamsProps> }) => {
  const params = await props.params;
  const { slug } = params;
  console.log(slug);
  const service = Services.find((s) => urlSlug(s.title) === slug) ?? undefined;
  return (
    <>
      <BreadcrumbHeader
        parentPage={{ name: "Services", url: "/services" }}
        currentPage={service?.title || ""}
      />
      <div className="w-screen min-h-screen">
        {service?.pageDetailContentSettings.map((setting, index) => (
          <div key={`${setting.componentName}_${index}`}>
            {setting.componentName === "ImageTextSection" ? (
              <ImageTextCard
                imageOrientation={setting.imageSide}
                image={setting.image}
                title={setting.title}
                subtitle={setting.subtitle}
                description={setting.description}
                btnSolid={setting.btnSolid}
                btnText={setting.btnText}
                btnUrl={setting.btnUrl}
              />
            ) : (
              ""
            )}
            {setting.componentName === "FeaturesSection" ? (
              <FeaturesSection
                title={setting.title}
                subtitle={setting.subtitle}
                features={setting.numberdFeatures}
              />
            ) : (
              ""
            )}
            {setting.componentName === "FAQSection" ? (
              <FAQSection
                title={setting.title}
                subtitle={setting.subtitle}
                faq={setting.faq}
              />
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
