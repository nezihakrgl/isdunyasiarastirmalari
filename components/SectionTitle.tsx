import { LucideIcon } from "lucide-react";

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
};

export default function SectionTitle({ title, subtitle, icon: Icon }: SectionTitleProps) {
  return (
    <div className="flex items-start gap-3">
      {Icon ? (
        <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600/10">
          <Icon className="h-5 w-5 text-blue-700" />
        </div>
      ) : null}

      <div className="min-w-0">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">{title}</h2>
        {subtitle ? (
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{subtitle}</p>
        ) : null}
      </div>
    </div>
  );
}
