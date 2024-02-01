"use client"
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Divider} from "@nextui-org/react";
import Link from "next/link"
export default function NavbarCustom() {
  return (
  <>
    <Navbar position="static">
        <NavbarBrand>
          <p className="font-bold text-inherit">KeSeries</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem isActive>
            <Link href="/animes" aria-current="page">
              Animes
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/peliculas">
              Peliculas
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/mangas">
              Mangas
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/series">
              Series
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/novelasligeras">
              Novelas Ligeras
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          {/* <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem> */}
        </NavbarContent>
    </Navbar>
    <Divider className="my-4" />
  </>
    
  );
}
