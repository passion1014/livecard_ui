import React from "react";
import { Button } from "src/components/shadcn/ui/button";
import { useAlertStore } from "src/stores/useAlertStore";
import { useConfirmStore } from "src/stores/useConfirmStore";

export default function Test() {
  const { showAlert, showAlertSync } = useAlertStore();
  const { showConfirm, showConfirmSync } = useConfirmStore();

  return (
    <div>
      <ul>
        <li>
          <Button
            variant="outline"
            onClick={() => {
              showAlert(
                "성공",
                "작업이 성공적으로 완료되었습니다.",
                () => alert("확인"),
                () => alert("취소")
              );
            }}
          >
            alert
          </Button>

          <Button
            variant="outline"
            onClick={async () => {
              const isOkClicked = await showAlertSync(
                "성공",
                "작업이 성공적으로 완료되었습니다."
              );

              alert(isOkClicked ? "확인클릭" : "취소클릭");
            }}
          >
            alertSync(동기)
          </Button>

          <Button
            variant="outline"
            onClick={() => {
              showConfirm("성공", "작업이 성공적으로 완료되었습니다.", () =>
                alert("확인")
              );
            }}
          >
            confirm
          </Button>

          <Button
            variant="outline"
            onClick={async () => {
              await showConfirmSync(
                "성공",
                "작업이 성공적으로 완료되었습니다."
              );
              alert("확인");
            }}
          >
            confirmSync(동기)
          </Button>
        </li>
      </ul>
    </div>
  );
}
