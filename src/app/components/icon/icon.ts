import { Component, Input } from "@angular/core";

export type IconName =
  | "arrow"
  | "code"
  | "external"
  | "github"
  | "layers"
  | "linkedin"
  | "menu"
  | "spark"
  | "x";

@Component({
  selector: "app-icon",
  standalone: true,
  template: `
    <svg
      aria-hidden="true"
      fill="none"
      [attr.height]="size"
      viewBox="0 0 24 24"
      [attr.width]="size"
    >
      <g
        stroke="currentColor"
        stroke-linecap="square"
        stroke-linejoin="miter"
        stroke-width="1.7"
      >
        @switch (name) {
          @case ("arrow") {
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          }
          @case ("code") {
            <path d="m8 9-4 3 4 3" />
            <path d="m16 9 4 3-4 3" />
            <path d="m14 5-4 14" />
          }
          @case ("external") {
            <path d="M15 4h5v5" />
            <path d="m10 14 10-10" />
            <path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" />
          }
          @case ("github") {
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.4 4 5 5 0 0 0 19.3.5S18.2.1 15 1.8a13.4 13.4 0 0 0-7 0C4.8.1 3.7.5 3.7.5A5 5 0 0 0 3.6 4a5.4 5.4 0 0 0-1.4 3.7c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4m0-3c-3 .9-3-1.5-4-2" />
          }
          @case ("layers") {
            <path d="m12 2 9 5-9 5-9-5 9-5Z" />
            <path d="m3 12 9 5 9-5" />
            <path d="m3 17 9 5 9-5" />
          }
          @case ("linkedin") {
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
            <path d="M2 9h4v12H2z" />
            <path d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
          }
          @case ("menu") {
            <path d="M4 7h16" />
            <path d="M4 17h16" />
          }
          @case ("spark") {
            <path d="m12 3-1.8 5.2L5 10l5.2 1.8L12 17l1.8-5.2L19 10l-5.2-1.8L12 3Z" />
          }
          @case ("x") {
            <path d="M5 5l14 14" />
            <path d="M19 5 5 19" />
          }
        }
      </g>
    </svg>
  `,
})
export class Icon {
  @Input({ required: true }) name!: IconName;
  @Input() size = 20;
}
