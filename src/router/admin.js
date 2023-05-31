const admin = [
  {
    path: "/admin",
    component: () => import("../layouts/admin.vue"),
    children: [
      {
        path: "notes",
        name: "admin-notes",
        component: () => import("../pages/admin/notes/index.vue"),
      },
      {
        path: "users",
        name: "admin-users",
        component: () => import("../pages/admin/users/index.vue"),
      },
      {
        path: "roles",
        name: "admin-roles",
        component: () => import("../pages/admin/roles/index.vue"),
      },
      {
        path: "settings",
        name: "admin-settings",
        component: () => import("../pages/admin/settings/index.vue"),
      },
    ],
  },
];

export default admin;
