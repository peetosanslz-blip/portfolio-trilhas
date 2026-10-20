import { createContext, useContext, useEffect, useRef, useState, Component } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import "@/index.css";
import { ReadyContext } from "@/ReadyContext";
import Nav from "@/components/Nav";
import Loader from "@/components/Loader";
import Home from "@/pages/Home";
import Sobre from "@/pages/Sobre";
import Projetos from "@/pages/Projetos";
import { Toaster } from "@/components/ui/sonner";

const useReady = () => useContext(ReadyContext);
export { useReady };

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-[var(--cor-fundo)] font-mono-2 text-sm text-[var(--cor-texto-dim)]">
          algo deu errado — recarregue a página
        </div>
      );
    }
    return this.props.children;
  }
}

function ScrollManager() {
  const { pathname } = useLocation();
  const lenisRef = useRef(null);
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1 });
    lenisRef.current = lenis;
    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
  useEffect(() => {
    if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Shell() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 1500);
    return () => clearTimeout(t);
  }, []);
  return (
    <ReadyContext.Provider value={ready}>
      <div className="relative min-h-screen overflow-x-clip bg-[var(--cor-fundo)] text-[var(--cor-texto)]">
        <div className="grain" aria-hidden="true" />
        <div className="scanlines" aria-hidden="true" />
        <Loader show={!ready} />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
        </Routes>
        <Toaster position="bottom-right" />
      </div>
    </ReadyContext.Provider>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ScrollManager />
        <Shell />
      </BrowserRouter>
    </ErrorBoundary>
  );
}
