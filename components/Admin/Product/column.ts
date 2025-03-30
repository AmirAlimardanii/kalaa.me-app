import { h } from "vue";
import type { ColumnDef } from "@tanstack/vue-table";
import actionMenu from "./CellAction.vue";

export interface Products {
  id: string;
  name: string;
  value: string;
  createdAt: string;
}

export const columns: ColumnDef<Products>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "value",
    header: "Color",
  },
  {
    accessorKey: "createdAt",
    header: "created At",
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const product = row.original;
      return h("div", { class: "relative ml-2" }, h(actionMenu, { product }));
    },
  },
];
