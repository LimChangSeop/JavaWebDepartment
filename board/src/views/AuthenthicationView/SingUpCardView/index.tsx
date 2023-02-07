import {Typography,Box,TextField,Button,FormControl,InputLabel,Input,InputAdornment,IconButton} from "@mui/material";
import React, { Dispatch, useState } from "react";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

function FirstPage() {

    // true하면 보이는게 꺼져있고, false하면 보이는게 커져있음.
    const [showPassword, setShowPassword] = useState<boolean>(true);
    const [showPasswordCheck, setShowPasswordCheck] = useState<boolean>(false);

  return (
    <Box>
      <TextField sx={{ mt: "40px" }} fullWidth variant="standard" label="이메일 주소*" />
      <FormControl fullWidth variant="standard" sx={{ mt: "40px" }}>
        <InputLabel htmlFor="standard-adornment-password">비밀번호*</InputLabel>
        <Input
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl fullWidth variant="standard" sx={{ mt: "40px" }}>
        <InputLabel htmlFor="standard-adornment-password">비밀번호 확인*</InputLabel>
        <Input
          type={showPasswordCheck ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPasswordCheck(!showPasswordCheck)}>
                {showPasswordCheck ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
}

function SecondPage() {
    return (
        <Box>두 번째 페이지</Box>
    );
}

interface Props {
  setLoginView: Dispatch<React.SetStateAction<boolean>>;
}

export default function SignUpCardView({ setLoginView }: Props) {
  const [page, setPage] = useState<number>(1);
  const onNextButtonHandler = () => {
    //todo: 이메일, 비밀번호, 비밀번호 확인 검증,
    //todo: 검증 실패하면 false
    //todo: 검증 성공하면 페이지 변경
    setPage(2);
  };

  return (
    <Box
      display="flex"
      sx={{
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
      }}>
      <Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h5" fontWeight="900">
            회원가입
          </Typography>
          <Typography variant="h5" fontWeight="900">
            {page}/2
          </Typography>
        </Box>
        {page === 1 ? <FirstPage /> : <SecondPage />}
      </Box>
      <Box>
        {page === 1 && (
          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{ mb: "20px" }}
            onClick={onNextButtonHandler}>
            다음 단계
          </Button>
        )}
        {page === 2 && (
          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{ mb: "20px" }}
            onClick={() => {
              setPage(1);
            }}>
            회원가입
          </Button>
        )}

        {/* 문자열은 굳이 {}가 필요없다. */}
        <Typography textAlign="center">
          이미 계정이 있으신가요?
          {/* 여기는 true를 넣어주자 */}
          <Typography
            component="span"
            fontWeight={900}
            onClick={() => setLoginView(true)}>
            로그인
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
}
