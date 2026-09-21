import { permanentRedirect } from "next/navigation";

export default function StreamingRedirect() {
  permanentRedirect("/");
}
