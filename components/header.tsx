import { BsTwitterX } from "react-icons/bs"
import { GitHubLogoIcon } from "@radix-ui/react-icons"

import { Button } from "./ui/button"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { ModeToggle } from "./theme-toggle"

const Header = () => {
  return (
    <header className="sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-between container h-12 w-full">
        <div className="text-xl font-bold">
          <Link href={"/"}>Kevin's Blog</Link>
        </div>
        <div className="flex items-center justify-center space-x-4 font-normal">
          <div className="flex items-center justify-normal space-x-5">
            <Link href={"/blog"} className="font-medium">
              Blog
            </Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/projects"}>Projects</Link>
          </div>
        </div>
        <div className=" flex items-center justify-center">
          <Link href={siteConfig.links.twitter}>
            <Button variant={"ghost"} size={"icon"}>
              <BsTwitterX className="h-4 w-4" />
            </Button>
          </Link>

          <Link href={siteConfig.links.github}>
            <Button variant={"ghost"} size={"icon"}>
              <GitHubLogoIcon className="h-4 w-4" />
            </Button>
          </Link>

          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header
