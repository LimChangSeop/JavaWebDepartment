package chapter06;

import java.util.Scanner;

// 게시물 작성
// 게시물 목록
// 게시물 상세 보기
// 게시물 수정

class Board {
	// 게시물 구분자
	int id;
	// 제목
	String title; 
	// 작성자
	String writer;
	// 작성 날짜 및 시간
	String writeDate;
	// 내용 
	String contents;
	// 좋아요
	int like;
	
	void contractionPrint() {
		System.out.println("게시물 구분자 : " + id + "\n게시물 제목 : " + title + "\n작성자 : " + writer + "\n작성 날짜 및 시간 : " + writeDate + "\n내용 : " + contents + "\n좋아요 : " + like);
	}
	
	void detailPrint() {
		System.out.println("title : " + title);
		System.out.println("writer : " + writer);
		System.out.println("writeDate : " + writeDate);
		System.out.println("contents : " + contents);
		System.out.println("like : " + like);
	}
}

public class Sample01 {
	
	// 배열을 while문 안에서 만들면 안되므로 밖에서 만들어주자
	// 인스턴스로 생성이 되어있어서 if문 안에 사용하지 못하므로 앞에 static을 붙여주자
	// final로 상수를 만들어줬으니 대문자로 바꿔주자
	final static Board[] BOARD_LIST = new Board[3];

	public static void main(String[] args) {
		// 프로그램은 사용자가 종료를 하기 전까지 계속 실행되어야 함.(while문)
		
		// 사용자로 부터 입력을 받아 
		boolean power = true; // 아래의 1번 방법을 사용하고 싶다면
		Scanner scanner = new Scanner(System.in);
		while(power) { // true를 넣으면 무한히 반복
			// 게시물 작성, 게시물 목록 기능을 선택할 수 있음.
			System.out.println("1. 게시물 작성\n2. 게시물 목록\n0. 프로그램 종료\n");
			int mainSelectNumber = scanner.nextInt();
			
//			검증(0, 1, 2아닌 값들이 들어왔을 때)
			if(mainSelectNumber < 0 || mainSelectNumber > 2) {
				System.out.println("잘못된 번호를 선택하셨습니다.");
				continue; // 처음 조건으로 다시 돌아감. true이기 때문에 다시 돌아감.
			}
			// 게시물 작성을 선택하면 타이틀, 작성자, 작성 날짜 및 시간, 내용을 입력할 수 있음.
			if(mainSelectNumber == 1) {
				// 입력이 완료되면 게시물이 자동 등록됨.
				// 등록이 완료되면 처음화면으로 돌아옴.
				System.out.println("게시물 작성");
				
				for(int i = 0; i < BOARD_LIST.length; i++) {
					// for-each문 썼는데 안된 이유 - 메모리 주소로 간 것이 아닌 board 값을 직접 접근하는 게 아니라 새로 만든 변수의 값이 바꼈기 때문
//					for(Board board : BOARD_LIST) {
					if(BOARD_LIST[i] != null) continue;
					
					// null이 3개이기 때문에 입력을 총 3번 받음
					Scanner writer = new Scanner(System.in);
					
					BOARD_LIST[i] = new Board();
					
					BOARD_LIST[i]. id = i;
					System.out.print("타이틀 : ");
					BOARD_LIST[i].title = writer.nextLine();
					System.out.print("작성자 : ");
					BOARD_LIST[i].writer = writer.nextLine();
					System.out.print("작성 날짜 및 시간 : ");
					BOARD_LIST[i].writeDate = writer.nextLine();
					System.out.print("내용 : ");
					BOARD_LIST[i].contents = writer.nextLine();
					
					break;
				}
				
			}
			// 게시물 목록을 선택하면 작성된 게시물을 모두 보여줌.(게시물 구분자, 게시물 제목, 작성자만 출력)
			if(mainSelectNumber == 2) {
				System.out.println("게시물 목록");
				
				// BOARD_LIST 배열에서 요소를 하나씩 꺼내옴
				for(Board board : BOARD_LIST) {
					// 꺼낸 board 요소가 null이면 다음요소를 꺼내 옴.
					if(board == null) continue;
					board.contractionPrint();
					
				}
				
				Scanner selector = new Scanner(System.in);
				
				// 게시물 목록에서 특정 게시물 구분자를 입력하면 해당 게시물의 상세 내용을 보여줌
				System.out.println("게시물을 선택하세요.(-1을 입력하면 처음 화면으로 돌아갑니다.)");
				int selectBoardId = selector.nextInt();

				// 만약 -1을 입력하면 처음화면으로 돌아옴
				
				if(selectBoardId >= BOARD_LIST.length) {
					System.out.println("3 이상의 게시물은 없습니다.");
				}
				
				if(selectBoardId == -1) continue;
				BOARD_LIST[selectBoardId].detailPrint();
				// 게시물 상세에서 수정하기를 선택하면 수정을 할 수 있음.
				// 수정이 완료되면 처음화면으로 돌아옴
			}
			
			// 처음 화면일 시 종료를 선택하면 프로그램이 종료됨		
			if(mainSelectNumber == 0) {
				System.out.println("프로그램 종료");

				// 방법 1. while문 조건을 false로 변경 <- 지금 상태에서는 사용 할 수 없음.
				power = false;
				// 방법 2. break문으로 while문 강제 종료
				// break;
				// 방법 3. return문으로 main 메서드 종료
				// return;
			}
		}
		
		
	}

}
