/**
 * v0 by Vercel.
 * @see https://v0.dev/t/RqkpdzIv2ti
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-950">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Entra a tu cuenta
          </h2>
          <p className="text-center">
            O podes{" "}
            <Link
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
              prefetch={false}
            >
              Crear Usuario
            </Link>
          </p>
        </div>
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <Label>Nombre de Usuario</Label>
            <Input id="username" name="username" type="text" autoComplete="username" required />
          </div>
          <div>
            <Label htmlFor="password">Contraseña</Label>
            <Input id="password" name="password" type="password" autoComplete="current-password" required />
          </div>
          <div>
            <Button>Entrar</Button>
          </div>
        </form>
      </div>
    </div>
  )
}