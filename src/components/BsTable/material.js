import moment from "moment";

export const columns = [
  {
    title: "基站名称",
    dataIndex: "bsName",
    key: "bsName",
    align: "center"
  },
  {
    title: "基站位置",
    dataIndex: "bsLocation",
    align: "center"
  },
  {
    title: "设备数量",
    dataIndex: "deviceTotal",
    key: "deviceTotal",

    align: "center"
  },
  {
    title: "联系人",
    dataIndex: "linkMan",
    key: "linkMan",
    align: "center"
  },
  {
    title: "联系电话",
    dataIndex: "linkPhone",
    key: "linkPhone",
    align: "center"
  },
  {
    title: "创建时间",
    dataIndex: "createdAt",
    key: "createdAt",
    align: "center",
    render: (text, record, index) => {
      return moment(text).format("YYYY-MM-DD HH:mm:ss");
    }
  },
  {
    title: "操作",
    align: "center"
  }
];
