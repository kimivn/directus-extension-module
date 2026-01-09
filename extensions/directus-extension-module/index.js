import { defineModule } from '@directus/extensions-sdk';
import { defineComponent, computed, resolveComponent, createElementBlock, openBlock, Fragment, renderList, createElementVNode, normalizeStyle, createVNode, toDisplayString, withCtx, createTextVNode, normalizeClass, ref, watch, createBlock, createCommentVNode } from 'vue';

const mockStats = {
  users: 42,
  collections: 12,
  items: 1337,
  lastUpdated: (/* @__PURE__ */ new Date()).toLocaleDateString()
};
const mockOrders = [
  { id: 1001, name: "ORD-2026-001", status: "completed", order_date: "2026-01-01", customer_name: "John Doe", customer_email: "john@example.com" },
  { id: 1002, name: "ORD-2026-002", status: "pending", order_date: "2026-01-02", customer_name: "Jane Smith", customer_email: "jane@smith.com" },
  { id: 1003, name: "ORD-2026-003", status: "shipped", order_date: "2026-01-03", customer_name: "Bob Wilson", customer_email: "bob@wilson.com" },
  { id: 1004, name: "ORD-2026-004", status: "processing", order_date: "2026-01-04", customer_name: "Alice Brown", customer_email: "alice@brown.com" },
  { id: 1005, name: "ORD-2026-005", status: "completed", order_date: "2026-01-05", customer_name: "Charlie Davis", customer_email: "charlie@davis.com" },
  { id: 1006, name: "ORD-2026-006", status: "cancelled", order_date: "2026-01-06", customer_name: "David Miller", customer_email: "david@miller.com" },
  { id: 1007, name: "ORD-2026-007", status: "pending", order_date: "2026-01-07", customer_name: "Eve Ward", customer_email: "eve@ward.com" },
  { id: 1008, name: "ORD-2026-008", status: "shipped", order_date: "2026-01-08", customer_name: "Frank Hill", customer_email: "frank@hill.com" },
  { id: 1009, name: "ORD-2026-009", status: "completed", order_date: "2026-01-09", customer_name: "Grace Wood", customer_email: "grace@wood.com" },
  { id: 1010, name: "ORD-2026-010", status: "processing", order_date: "2026-01-10", customer_name: "Hank Cook", customer_email: "hank@cook.com" },
  { id: 1011, name: "ORD-2026-011", status: "pending", order_date: "2026-01-11", customer_name: "Ivy Bell", customer_email: "ivy@bell.com" },
  { id: 1012, name: "ORD-2026-012", status: "shipped", order_date: "2026-01-12", customer_name: "Jack Gray", customer_email: "jack@gray.com" },
  { id: 1013, name: "ORD-2026-013", status: "completed", order_date: "2026-01-13", customer_name: "Kelly King", customer_email: "kelly@king.com" },
  { id: 1014, name: "ORD-2026-014", status: "cancelled", order_date: "2026-01-14", customer_name: "Liam Page", customer_email: "liam@page.com" },
  { id: 1015, name: "ORD-2026-015", status: "pending", order_date: "2026-01-15", customer_name: "Mona Ross", customer_email: "mona@ross.com" },
  { id: 1016, name: "ORD-2026-016", status: "processing", order_date: "2026-01-16", customer_name: "Noah Scott", customer_email: "noah@scott.com" },
  { id: 1017, name: "ORD-2026-017", status: "shipped", order_date: "2026-01-17", customer_name: "Olivia Young", customer_email: "olivia@young.com" },
  { id: 1018, name: "ORD-2026-018", status: "completed", order_date: "2026-01-18", customer_name: "Paul Reed", customer_email: "paul@reed.com" },
  { id: 1019, name: "ORD-2026-019", status: "pending", order_date: "2026-01-19", customer_name: "Quinn Long", customer_email: "quinn@long.com" },
  { id: 1020, name: "ORD-2026-020", status: "processing", order_date: "2026-01-20", customer_name: "Rose Hart", customer_email: "rose@hart.com" }
];

const _hoisted_1$3 = { class: "stats-grid" };
const _hoisted_2$2 = { class: "stat-content" };
const _hoisted_3$2 = { class: "stat-label" };
const _hoisted_4$2 = { class: "stat-value" };
var _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "StatsCards",
  props: {
    orders: {}
  },
  setup(__props) {
    const props = __props;
    const computedStats = computed(() => {
      const total = props.orders.length;
      const completed = props.orders.filter((o) => o.status === "completed").length;
      const pending = props.orders.filter((o) => o.status === "pending").length;
      const processing = props.orders.filter((o) => o.status === "processing").length;
      const cancelled = props.orders.filter((o) => o.status === "cancelled").length;
      const shipped = props.orders.filter((o) => o.status === "shipped").length;
      return [
        {
          label: "Total Orders",
          value: total,
          icon: "shopping_cart",
          color: "#6644ff",
          bgColor: "#6644ff22"
        },
        {
          label: "Completed",
          value: completed,
          icon: "check_circle",
          color: "#00c897",
          bgColor: "#00c89722"
        },
        {
          label: "Shipped",
          value: shipped,
          icon: "local_shipping",
          color: "#2196f3",
          bgColor: "#2196f322"
        },
        {
          label: "pending",
          value: pending,
          icon: "pause",
          color: "#ffa500",
          bgColor: "#ffa50022"
        },
        {
          label: "Processing",
          value: processing,
          icon: "sync",
          color: "#2196f3",
          bgColor: "#2196f322"
        },
        {
          label: "Cancelled",
          value: cancelled,
          icon: "cancel",
          color: "#f44336",
          bgColor: "#f4433622"
        }
      ];
    });
    return (_ctx, _cache) => {
      const _component_v_icon = resolveComponent("v-icon");
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(computedStats.value, (stat) => {
            return openBlock(), createElementBlock("div", {
              key: stat.label,
              class: "stat-card"
            }, [
              createElementVNode(
                "div",
                {
                  class: "stat-icon",
                  style: normalizeStyle({ background: stat.bgColor })
                },
                [
                  createVNode(_component_v_icon, {
                    name: stat.icon,
                    color: stat.color
                  }, null, 8, ["name", "color"])
                ],
                4
                /* STYLE */
              ),
              createElementVNode("div", _hoisted_2$2, [
                createElementVNode(
                  "div",
                  _hoisted_3$2,
                  toDisplayString(stat.label),
                  1
                  /* TEXT */
                ),
                createElementVNode(
                  "div",
                  _hoisted_4$2,
                  toDisplayString(stat.value),
                  1
                  /* TEXT */
                )
              ])
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]);
    };
  }
});

const _hoisted_1$2 = { class: "data-section" };
const _hoisted_2$1 = { class: "section-header" };
const _hoisted_3$1 = { class: "data-table" };
const _hoisted_4$1 = { class: "customer-info" };
const _hoisted_5$1 = { class: "customer-name" };
const _hoisted_6$1 = { class: "customer-email" };
const _hoisted_7 = { class: "actions" };
var _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "RecentOrders",
  props: {
    orders: {}
  },
  emits: ["add", "edit", "delete"],
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_button = resolveComponent("v-button");
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createElementVNode("div", _hoisted_2$1, [
          _cache[2] || (_cache[2] = createElementVNode(
            "h2",
            null,
            "Recent Orders",
            -1
            /* CACHED */
          )),
          createVNode(_component_v_button, {
            small: "",
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("add"))
          }, {
            default: withCtx(() => [
              createVNode(_component_v_icon, {
                name: "add",
                left: ""
              }),
              _cache[1] || (_cache[1] = createTextVNode(
                " Add Order ",
                -1
                /* CACHED */
              ))
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        createElementVNode("div", _hoisted_3$1, [
          createElementVNode("table", null, [
            _cache[3] || (_cache[3] = createElementVNode(
              "thead",
              null,
              [
                createElementVNode("tr", null, [
                  createElementVNode("th", null, "ID"),
                  createElementVNode("th", null, "Order Name"),
                  createElementVNode("th", null, "Customer"),
                  createElementVNode("th", null, "Status"),
                  createElementVNode("th", null, "Date"),
                  createElementVNode("th", null, "Actions")
                ])
              ],
              -1
              /* CACHED */
            )),
            createElementVNode("tbody", null, [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(__props.orders, (order) => {
                  return openBlock(), createElementBlock("tr", {
                    key: order.id
                  }, [
                    createElementVNode(
                      "td",
                      null,
                      toDisplayString(order.id),
                      1
                      /* TEXT */
                    ),
                    createElementVNode(
                      "td",
                      null,
                      toDisplayString(order.name),
                      1
                      /* TEXT */
                    ),
                    createElementVNode("td", null, [
                      createElementVNode("div", _hoisted_4$1, [
                        createElementVNode(
                          "div",
                          _hoisted_5$1,
                          toDisplayString(order.customer_name),
                          1
                          /* TEXT */
                        ),
                        createElementVNode(
                          "div",
                          _hoisted_6$1,
                          toDisplayString(order.customer_email),
                          1
                          /* TEXT */
                        )
                      ])
                    ]),
                    createElementVNode("td", null, [
                      createElementVNode(
                        "span",
                        {
                          class: normalizeClass(["status-badge", order.status])
                        },
                        toDisplayString(order.status),
                        3
                        /* TEXT, CLASS */
                      )
                    ]),
                    createElementVNode(
                      "td",
                      null,
                      toDisplayString(order.order_date),
                      1
                      /* TEXT */
                    ),
                    createElementVNode("td", _hoisted_7, [
                      createVNode(_component_v_button, {
                        "x-small": "",
                        icon: "",
                        onClick: ($event) => _ctx.$emit("edit", order.id)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_icon, {
                            name: "edit",
                            small: ""
                          })
                        ]),
                        _: 1
                        /* STABLE */
                      }, 8, ["onClick"]),
                      createVNode(_component_v_button, {
                        "x-small": "",
                        icon: "",
                        onClick: ($event) => _ctx.$emit("delete", order.id)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_icon, {
                            name: "delete",
                            small: ""
                          })
                        ]),
                        _: 1
                        /* STABLE */
                      }, 8, ["onClick"])
                    ])
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ])
        ])
      ]);
    };
  }
});

const _hoisted_1$1 = { class: "custom-form" };
const _hoisted_2 = { class: "form-group" };
const _hoisted_3 = { class: "form-group" };
const _hoisted_4 = { class: "form-group" };
const _hoisted_5 = { class: "form-group" };
const _hoisted_6 = { class: "form-group" };
var _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "OrderModal",
  props: {
    active: { type: Boolean },
    order: {}
  },
  emits: ["close", "save"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const isEdit = computed(() => !!props.order);
    const formData = ref({
      id: 0,
      name: "",
      status: "pending",
      order_date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0] || "",
      customer_name: "",
      customer_email: ""
    });
    const statusOptions = [
      { text: "Processing", value: "processing" },
      { text: "Pending", value: "pending" },
      { text: "Completed", value: "completed" },
      { text: "Shipped", value: "shipped" },
      { text: "Cancelled", value: "cancelled" }
    ];
    watch(
      () => props.order,
      (newOrder) => {
        if (newOrder) {
          formData.value = { ...newOrder };
        } else {
          formData.value = {
            id: 0,
            name: "",
            status: "pending",
            order_date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0] || "",
            customer_name: "",
            customer_email: ""
          };
        }
      },
      { immediate: true }
    );
    const save = () => {
      emit("save", { ...formData.value });
    };
    return (_ctx, _cache) => {
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_input = resolveComponent("v-input");
      const _component_v_select = resolveComponent("v-select");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_button = resolveComponent("v-button");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_dialog = resolveComponent("v-dialog");
      return openBlock(), createBlock(_component_v_dialog, {
        "model-value": __props.active,
        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.$emit("close")),
        onEsc: _cache[7] || (_cache[7] = ($event) => _ctx.$emit("close")),
        "max-width": 600
      }, {
        default: withCtx(() => [
          formData.value ? (openBlock(), createBlock(_component_v_card, { key: 0 }, {
            default: withCtx(() => [
              createVNode(_component_v_card_title, null, {
                default: withCtx(() => [
                  createTextVNode(
                    toDisplayString(isEdit.value ? "Edit Order" : "Add New Order"),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_v_card_text, null, {
                default: withCtx(() => [
                  createElementVNode("div", _hoisted_1$1, [
                    createElementVNode("div", _hoisted_2, [
                      _cache[8] || (_cache[8] = createElementVNode(
                        "label",
                        null,
                        "Order Name",
                        -1
                        /* CACHED */
                      )),
                      createVNode(_component_v_input, {
                        modelValue: formData.value.name,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData.value.name = $event),
                        placeholder: "ORD-2026-XXX"
                      }, null, 8, ["modelValue"])
                    ]),
                    createElementVNode("div", _hoisted_3, [
                      _cache[9] || (_cache[9] = createElementVNode(
                        "label",
                        null,
                        "Customer Name",
                        -1
                        /* CACHED */
                      )),
                      createVNode(_component_v_input, {
                        modelValue: formData.value.customer_name,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formData.value.customer_name = $event),
                        placeholder: "John Doe"
                      }, null, 8, ["modelValue"])
                    ]),
                    createElementVNode("div", _hoisted_4, [
                      _cache[10] || (_cache[10] = createElementVNode(
                        "label",
                        null,
                        "Customer Email",
                        -1
                        /* CACHED */
                      )),
                      createVNode(_component_v_input, {
                        modelValue: formData.value.customer_email,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formData.value.customer_email = $event),
                        type: "email",
                        placeholder: "john@example.com"
                      }, null, 8, ["modelValue"])
                    ]),
                    createElementVNode("div", _hoisted_5, [
                      _cache[11] || (_cache[11] = createElementVNode(
                        "label",
                        null,
                        "Status",
                        -1
                        /* CACHED */
                      )),
                      createVNode(_component_v_select, {
                        modelValue: formData.value.status,
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => formData.value.status = $event),
                        items: statusOptions
                      }, null, 8, ["modelValue"])
                    ]),
                    createElementVNode("div", _hoisted_6, [
                      _cache[12] || (_cache[12] = createElementVNode(
                        "label",
                        null,
                        "Order Date",
                        -1
                        /* CACHED */
                      )),
                      createVNode(_component_v_input, {
                        modelValue: formData.value.order_date,
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => formData.value.order_date = $event),
                        type: "date"
                      }, null, 8, ["modelValue"])
                    ])
                  ])
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_v_card_actions, null, {
                default: withCtx(() => [
                  createVNode(_component_v_button, {
                    secondary: "",
                    onClick: _cache[5] || (_cache[5] = ($event) => _ctx.$emit("close"))
                  }, {
                    default: withCtx(() => [..._cache[13] || (_cache[13] = [
                      createTextVNode(
                        "Cancel",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  }),
                  createVNode(_component_v_button, { onClick: save }, {
                    default: withCtx(() => [
                      createTextVNode(
                        toDisplayString(isEdit.value ? "Update" : "Create"),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          })) : createCommentVNode("v-if", true)
        ]),
        _: 1
        /* STABLE */
      }, 8, ["model-value"]);
    };
  }
});

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=true===r.prepend?"prepend":"append",d=true===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css$1 = "\n.custom-form[data-v-84811f58] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 10px 0;\n}\n.form-group[data-v-84811f58] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.form-group label[data-v-84811f58] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--v-list-item-title-color, var(--theme--foreground-subdued));\n}\n";
n(css$1,{});

var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

var OrderModal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-84811f58"]]);

var css = ".orders-container {\n  padding: var(--content-padding);\n  padding-top: 0;\n  max-width: 1200px;\n}\n\n.stats-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 20px;\n  margin: 32px 0;\n}\n\n.stat-card {\n  background: var(--theme--background-subdued);\n  border-radius: var(--theme--border-radius);\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  transition: transform 0.2s, box-shadow 0.2s;\n  border: 1px solid var(--theme--border-color-subdued);\n}\n\n.stat-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n\n.stat-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.stat-content {\n  flex: 1;\n}\n\n.stat-label {\n  font-size: 14px;\n  color: var(--theme--foreground-subdued);\n  margin-bottom: 4px;\n}\n\n.stat-value {\n  font-size: 28px;\n  font-weight: 600;\n  color: var(--theme--foreground);\n}\n\n.data-section {\n  background: var(--theme--background-subdued);\n  border-radius: var(--theme--border-radius);\n  padding: 24px;\n  margin-bottom: 24px;\n  border: 1px solid var(--theme--border-color-subdued);\n}\n\n.section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.section-header h2 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--theme--foreground);\n}\n\n.data-table {\n  overflow-x: auto;\n}\n\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\n\nthead {\n  background: var(--theme--background-normal);\n}\n\nth {\n  text-align: left;\n  padding: 12px 16px;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--theme--foreground-subdued);\n  border-bottom: 2px solid var(--theme--border-color);\n}\n\ntd {\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--theme--border-color-subdued);\n  color: var(--theme--foreground);\n}\n\ntbody tr:hover {\n  background: var(--theme--background-normal);\n}\n\n.status-badge {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n}\n\n.status-badge.processing {\n  background: #00c89722;\n  color: #00c897;\n}\n\n.status-badge.pending {\n  background: #ffa50022;\n  color: #ffa500;\n}\n\n.status-badge.completed {\n  background: #6644ff22;\n  color: #6644ff;\n}\n\n.status-badge.shipped {\n  background: #3498db22;\n  color: #3498db;\n}\n\n.status-badge.cancelled {\n  background: #e74c3c22;\n  color: #e74c3c;\n}\n\n.customer-info {\n  display: flex;\n  flex-direction: column;\n}\n\n.customer-name {\n  font-weight: 500;\n}\n\n.customer-email {\n  font-size: 12px;\n  color: var(--theme--foreground-subdued);\n}\n\n.info-section {\n  margin-bottom: 24px;\n}\n\n.info-section ul {\n  margin-top: 12px;\n  padding-left: 20px;\n}\n\n.info-section li {\n  margin: 8px 0;\n}\n\ntd.actions {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n  max-width: 100px;\n}";
n(css,{});

const _hoisted_1 = { class: "orders-container" };
var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "module",
  setup(__props) {
    ref(mockStats);
    const orders = ref(mockOrders);
    const isModalActive = ref(false);
    const editingOrder = ref(null);
    const openAddModal = () => {
      editingOrder.value = null;
      isModalActive.value = true;
    };
    const openEditModal = (id) => {
      const order = orders.value.find((o) => o.id === id);
      if (order) {
        editingOrder.value = { ...order };
        isModalActive.value = true;
      }
    };
    const handleSave = (order) => {
      if (editingOrder.value) {
        const index = orders.value.findIndex((o) => o.id === order.id);
        if (index !== -1) {
          orders.value[index] = order;
        }
      } else {
        const newId = orders.value.length > 0 ? Math.max(...orders.value.map((o) => o.id)) + 1 : 1001;
        orders.value.unshift({
          ...order,
          id: newId
        });
      }
      isModalActive.value = false;
    };
    const deleteOrder = (id) => {
      orders.value = orders.value.filter((order) => order.id !== id);
    };
    return (_ctx, _cache) => {
      const _component_v_breadcrumb = resolveComponent("v-breadcrumb");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_button = resolveComponent("v-button");
      const _component_private_view = resolveComponent("private-view");
      return openBlock(), createBlock(_component_private_view, { title: "Orders" }, {
        headline: withCtx(() => [
          createVNode(_component_v_breadcrumb, { items: [{ name: "Orders", to: "/orders" }] })
        ]),
        "title-outer:prepend": withCtx(() => [
          createVNode(_component_v_button, {
            class: "header-icon",
            rounded: "",
            disabled: "",
            icon: "",
            secondary: ""
          }, {
            default: withCtx(() => [
              createVNode(_component_v_icon, { name: "orders" })
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        default: withCtx(() => [
          createElementVNode("div", _hoisted_1, [
            createVNode(_sfc_main$3, { orders: orders.value }, null, 8, ["orders"]),
            createVNode(_sfc_main$2, {
              orders: orders.value,
              onAdd: openAddModal,
              onEdit: openEditModal,
              onDelete: deleteOrder
            }, null, 8, ["orders"]),
            createVNode(OrderModal, {
              active: isModalActive.value,
              order: editingOrder.value,
              onClose: _cache[0] || (_cache[0] = ($event) => isModalActive.value = false),
              onSave: handleSave
            }, null, 8, ["active", "order"])
          ])
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
});

var index = defineModule({
  id: "orders",
  name: "Orders",
  icon: "dashboard",
  routes: [
    {
      path: "",
      component: _sfc_main
    }
  ]
});

export { index as default };
