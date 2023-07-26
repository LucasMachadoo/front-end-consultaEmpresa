import BoxAds from "@/components/atoms/BoxAds";
import Faq from "@/components/molecules/Faq";
import TabsCompany from "@/components/molecules/TabsCompany";
import Image from "next/image";


export default function Home() {
  return (
    <div>

      <BoxAds />
      <TabsCompany />
      <Faq />
    </div>
  );
} 
