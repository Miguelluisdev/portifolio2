import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ModeToggle } from "./theme";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu, UserRoundCog } from "lucide-react";
import { BaseLayout} from "./baselayout";


export const Navbar = () => {
  const user = null;

  return (
    <div className="sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative">
        <BaseLayout>
          <div className="border-b rounded-full border-gray-200 bg-background shadow-md ">
            <div className="flex h-16 items-center">
              <div className="ml-4 flex items-center justify-around lg-ml-0">
                <Link href="/" className="text-xl" >
                  Miguel Luis
                </Link>
              </div>
              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch"></div>
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                {user ? (
                    <p></p>
                  ) : (
                    <Link
                      href="/"
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      Home
                    </Link>
                  )}
                {user ? null : (
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  )}
                  {user ? (
                    <p></p>
                  ) : (
                    <Link
                      href="/about"
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      Sobre Mim
                    </Link>
                  )}
                  {user ? null : (
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  )}
                  {user ? (
                    <p></p>
                  ) : (
                    <Link
                      href="/skills"
                      className={buttonVariants({ variant: "ghost" })}
                    >
                     Habilidades
                    </Link>
                  )}
                    {user ? null : (
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  )}
                  {user ? (
                    <p></p>
                  ) : (
                    <Link
                      href="/projects"
                      className={buttonVariants({ variant: "ghost" })}
                    >
                     Projetos
                    </Link>
                  )}
                  {user ? (
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  ) : null}

                  {user ? null : (
                    <div className="flex lg:ml-6">
                      <span
                        className="h-6 w-px bg-gray-200"
                        aria-hidden="true"
                      ></span>
                    </div>
                  )}
                  <div className="ml-4 flow-root lg:ml-6">
                    <ModeToggle />
                  </div>
                </div>
                <div className="flex lg:hidden lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Sheet>
                    <SheetTrigger><Menu className="mr-2"/></SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetDescription className="flex flex-col items-center justify-center" >
                        <Link href="/" className="text-xl" >
                          Miguel Luis
                        </Link>
                        {user ? (
                    <p></p>
                  ) : (
                    <Link
                      href="/"
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      Home
                    </Link>
                  )}
                  {user ? (
                    <p></p>
                  ) : (
                    <Link
                      href="/about"
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      Sobre Mim
                    </Link>
                  )}
                 
                  {user ? (
                    <p></p>
                  ) : (
                    <Link
                      href="/skills"
                      className={buttonVariants({ variant: "ghost" })}
                    >
                     Habilidades
                    </Link>
                  )}
                  
                  {user ? (
                    <p></p>
                  ) : (
                    <Link
                      href="/projects"
                      className={buttonVariants({ variant: "ghost" })}
                    >
                     Projetos
                    </Link>
                  )}
                
                  <div className="ml-4 flow-root lg:ml-6">
                    <ModeToggle />
                  </div>
                        </SheetDescription>
                      </SheetHeader>
                    </SheetContent>
                  </Sheet>
                  </div>
              </div>
            </div>
          </div>
        </BaseLayout>
      </header>
    </div>
  );
};