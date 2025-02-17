import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button"


const Header: React.FC = () => {

  return (
    <div className="sticky top-0 flex flex-wrap pt-1 pb-2 pl-2 sm:pl-4 w-full z-10 bg-transparent backdrop-blur-md justify-between border-b" >
      <h1 className="text-left text-foreground font-extrabold tracking-tight">Kylix Classifier</h1>
      <div className="flex flex-row gap-2 h-[3.2em] pt-3 pb-1 pr-2 md:pr-5">
        <a href="https://github.com/japerc/kylix-app" target="_blank" rel="noopener noreferrer" >
          <Button variant="outline" size="icon" className="flex p-2">
            <div className="relative flex">
              <img src="/github-mark-white.svg" alt="Invertocat Logo White" className="scale-0 dark:scale-100" />
              <img src="/github-mark.svg" alt="Invertocat Logo" className="absolute scale-100 dark:scale-0" />
            </div>
          </Button>
        </a >
        <ModeToggle />
      </div>
    </div >
  );
};

export default Header;