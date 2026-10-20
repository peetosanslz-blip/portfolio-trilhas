import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { toast } from "sonner";

export default function StickerButtons() {
  return (
    <div className="flex w-full max-w-[540px] flex-col gap-4">
      <Link to="/sobre" data-testid="btn-sobre" className="btn-sticker btn-sticker--ghost">
        Sobre mim
        <ArrowUpRight className="size-4" />
      </Link>
      <Link
        to="/projetos"
        data-testid="btn-projetos"
        className="btn-sticker btn-sticker--primary"
      >
        Veja meus projetos
        <ArrowUpRight className="size-4" />
      </Link>
      <button
        type="button"
        data-testid="btn-certificados"
        className="btn-sticker btn-sticker--muted"
        onClick={() =>
          toast("Em breve", {
            description: "Os certificados serão adicionados aqui em breve.",
          })
        }
      >
        Acesse os meus certificados
        <span className="badge-breve">em breve</span>
      </button>
    </div>
  );
}
