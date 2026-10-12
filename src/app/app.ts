import { Component } from "@angular/core";
import { Icon, type IconName } from "./components/icon/icon";

type Project = {
  number: string;
  title: string;
  description: string;
  tags: string[];
  color: string;
};

type Service = {
  number: string;
  title: string;
  text: string;
  icon: IconName;
};

@Component({
  selector: "app-root",
  standalone: true,
  imports: [Icon],
  templateUrl: "./app.html",
})
export class App {
  menuOpen = false;

  readonly chartHeights = [32, 48, 42, 68, 56, 88, 76, 100];

  readonly projects: Project[] = [
    {
      number: "01",
      title: "Nexo Finance",
      description:
        "Plataforma financeira que transforma dados complexos em decisões simples para mais de 12 mil usuários.",
      tags: ["React", "TypeScript", "Node.js"],
      color: "lime",
    },
    {
      number: "02",
      title: "Aura Health",
      description:
        "Experiência digital de bem-estar com jornadas personalizadas, conteúdo e acompanhamento de hábitos.",
      tags: ["Next.js", "PostgreSQL", "AWS"],
      color: "violet",
    },
    {
      number: "03",
      title: "Forma Studio",
      description:
        "Portfólio imersivo para um estúdio de arquitetura, com navegação fluida e direção visual minimalista.",
      tags: ["React", "Framer Motion", "Sanity"],
      color: "coral",
    },
  ];

  readonly services: Service[] = [
    {
      number: "01",
      title: "Produto digital",
      text: "Da ideia ao produto real. Interfaces intuitivas, jornadas claras e experiências que as pessoas gostam de usar.",
      icon: "spark",
    },
    {
      number: "02",
      title: "Desenvolvimento",
      text: "Aplicações rápidas, escaláveis e bem construídas, com código sustentável e foco em performance.",
      icon: "code",
    },
    {
      number: "03",
      title: "Evolução contínua",
      text: "Análise, otimização e novas funcionalidades para manter seu produto relevante e sempre em movimento.",
      icon: "layers",
    },
  ];

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  sendEmail(event: SubmitEvent): void {
    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;
    const data = new FormData(form);
    const email = String(data.get("email"));
    const subject = encodeURIComponent(String(data.get("subject")));
    const message = String(data.get("message"));
    const body = encodeURIComponent(`E-mail: ${email}\n\nMensagem:\n${message}`);

    window.location.href = `mailto:ola@rafaelcosta.dev?subject=${subject}&body=${body}`;
  }
}
