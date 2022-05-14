import format from "date-fns/format";
import jwtDecode from "jwt-decode";

const FormatUtils = {
  formatDate(date, typeFormat) {
    return format(new Date(date), typeFormat);
  },

  formatToken() {
    const token = jwtDecode(localStorage.getItem("token"));
    return token.id;
  },
};
export default FormatUtils;
