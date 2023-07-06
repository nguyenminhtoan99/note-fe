const admin = [
  {
    path: "/admin",
    component: () => import("../layouts/admin.vue"),
    children: [
      {
        path: "notes",
        name: "admin-notes",
        breadcrumb: "notes",
        component: () => import("../pages/admin/notes/index.vue"),
      },
      {
        path: "notes/create",
        name: "create-note",
        breadcrumb: "create",
        component: () => import("../pages/admin/notes/create/index.vue"),
      },
      {
        path: "users",
        name: "admin-users",
        breadcrumb: "users",
        component: () => import("../pages/admin/users/index.vue"),
      },
      {
        path: "roles",
        name: "admin-roles",
        breadcrumb: "roles",
        component: () => import("../pages/admin/roles/index.vue"),
      },
      {
        path: "settings",
        name: "admin-settings",
        breadcrumb: "settings",
        component: () => import("../pages/admin/settings/index.vue"),
      },
    ],
  },
];

export default admin;
