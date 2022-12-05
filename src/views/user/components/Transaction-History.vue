<template>
  <div class="transaction-history pa-3">
    <div class="greyblack--text text-dp-xs font-weight-medium text-uppercase">
      Transaction History
    </div>
    <div class="card-content mt-3 pa-6">
      <v-data-table
        :headers="headers"
        :items="desserts"
        :page.sync="page"
        :items-per-page="itemsPerPage"
        hide-default-footer
        class="elevation-1"
        @page-count="pageCount = $event"
      ></v-data-table>
      <div class="text-center pt-2">
        <v-pagination v-model="page" :length="pageCount"></v-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import i18n from "@/i18n";
import { userStore } from "../stores/userStore.js";
export default {
  name: "TransactionHistory",
  data() {
    return {
      userStore: userStore(),
      page: 1,
      pageCount: 10,
      itemsPerPage: 10,
      headers: [
        {
          text: "Date",
          align: "start",
          sortable: false,
          value: "date",
        },
        { text: "Purchase", align: "center", value: "purchase"},
        { text: "Status", value: "status" },
        { text: "Order ID", value: "orderID" },
      ],
      desserts: [
        {
          date: "Dec 31, 2022",
          purchase: "Thẻ cào VTC 50.000vnd",
          status: "Complete",
          orderID: "VN666666666",
        },
        {
          date: "Dec 31, 2022",
          purchase: "Thẻ cào VTC 50.000vnd",
          status: "Complete",
          orderID: "VN666666666",
        },
        {
          date: "Dec 31, 2022",
          purchase: "Thẻ cào VTC 50.000vnd",
          status: "Complete",
          orderID: "VN666666666",
        },
        {
          date: "Dec 31, 2022",
          purchase: "Thẻ cào VTC 50.000vnd",
          status: "Complete",
          orderID: "VN666666666",
        },
        {
          date: "Dec 31, 2022",
          purchase: "Thẻ cào VTC 50.000vnd",
          status: "Complete",
          orderID: "VN666666666",
        },
        {
          date: "Dec 31, 2022",
          purchase: "Thẻ cào VTC 50.000vnd",
          status: "Complete",
          orderID: "VN666666666",
        },
        {
          date: "Dec 31, 2022",
          purchase: "Thẻ cào VTC 50.000vnd",
          status: "Complete",
          orderID: "VN666666666",
        },
        {
          date: "Dec 31, 2022",
          purchase: "Thẻ cào VTC 50.000vnd",
          status: "Complete",
          orderID: "VN666666666",
        },
        {
          date: "Dec 31, 2022",
          purchase: "Thẻ cào VTC 50.000vnd",
          status: "Complete",
          orderID: "VN666666666",
        },
        {
          date: "Dec 31, 2022",
          purchase: "Thẻ cào VTC 50.000vnd",
          status: "Complete",
          orderID: "VN666666666",
        },
      ],
    };
  },
  components: {},
  methods: {
    gotoRouter(url) {
      this.$router.push({
        params: { lang: i18n.locale },
        name: url,
      });
    },
  },
};
</script>
<style lang="scss">
.transaction-history {
  min-height: 100%;
  .card-content {
    background: #ffffff;
    box-shadow: inset 0px -4px 0px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
    .v-data-table-header {
      tr th {
        font-size: 18px !important;
        line-height: 24px;
      }
    }
  }
  .text-sub {
    color: rgba(0, 0, 0, 0.6);
  }
}
</style>