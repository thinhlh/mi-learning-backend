import { check } from "k6";
import http from "k6/http";

export default function () {
  // var url =
  //   __ENV.OPTIMIZED === "true"
  //     ? "http://host.docker.internal:80"
  //     : "http://host.docker.internal:3000";

  var url = "http://host.docker.internal:8080/api/v1/articles";

  console.log(url);
  let res = http.get(url, { timeout: 60000 }); // 60s
  check(
    res,
    {
      "is response success": (r) => r.status === 200,
    },
    { my_tag: res.body }
  );
}
