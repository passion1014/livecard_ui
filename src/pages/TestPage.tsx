import React from "react";
import CancelButton from "src/components/common/button/CancelButton";
import GenericButton from "src/components/common/button/GenericButton";
import SaveButton from "src/components/common/button/SaveButton";
import UnderlineInput from "src/components/common/input/UnderlineInput";
import { Button } from "src/components/shadcn/ui/button";
import { Label } from "src/components/shadcn/ui/label";
import { useAlertStore } from "src/stores/useAlertStore";
import { useConfirmStore } from "src/stores/useConfirmStore";

export default function Test() {
  const { showAlert, showAlertSync } = useAlertStore();
  const { showConfirm, showConfirmSync } = useConfirmStore();

  return (
    <div>
      <ul>
        <li>
          <div># Dialog</div>
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
        <li>
          # 언더바 input
          <form className="space-y-4">
            <div className="space-y-2 flex items-center flex-row">
              <Label className="inline-block w-1/4">이름</Label>
              <UnderlineInput value="김정민" readOnly />
            </div>
          </form>
        </li>
        <li># 버튼</li>
        <div>
          <SaveButton /> <CancelButton />{" "}
          <GenericButton>일반버튼</GenericButton>
        </div>
      </ul>
    </div>
  );
}
