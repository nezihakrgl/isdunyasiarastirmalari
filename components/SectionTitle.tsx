import type { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
};

export default function SectionTitle({ title, subtitle, icon: Icon }: Props) {
  return (
    <div className="mb-6">
      <div className="flex items-start gap-3">
        {Icon && (
          <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600/10">
            <Icon className="h-5 w-5 text-blue-700" />
          </div>
        )}

        <div className="min-w-0">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-1 text-sm sm:text-base text-slate-600 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
