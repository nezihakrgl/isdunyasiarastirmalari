import { Search, CheckCircle, BarChart3 } from "lucide-react";

export const features = [
  {
    title: "Araştırma",
    description: "İş dünyasına yönelik veri odaklı analizler.",
    Icon: Search,
    image:
      "https://akademiktezim.com.tr/wp-content/uploads/2024/11/tezde-arastirma-yontemleri-1024x683.jpg",
  },
  {
    title: "Değerlendirme",
    description: "Başarı ve güven kriterlerine dayalı inceleme.",
    Icon: CheckCircle,
    image:
      "https://pessurvey.com/upload/8/performans-deg-erlendirme-nedir-ve-neden-o-nemlidir-1200x0.jpg",
  },
  {
  title: "Endeks",
  description: "İş insanları ve şirketler için referans değerlendirme.",
  Icon: BarChart3,
  image:
  "https://img.ekonomim.com/rcman/Cw850h478q95gc/storage/files/images/2020/12/21/endeks-osiK_cover.jpg",

},

] as const;
