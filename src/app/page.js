import { Input } from "@/components/input/Input";

export default function Home() {
  return (
    <form autoComplete="off">
      <Input label="Nome" type="text" name="name" />
      <br />
      <Input label="Email" type="email" name="email" />
    </form>
  );
}
