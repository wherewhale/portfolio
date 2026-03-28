export interface Article {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
  url: string;
  date: string;
  /** 기술 또는 주제 태그 */
  topics: string[];
  /** 선택적으로 추가할 수 있는 특별한 칭호나 배지 */
  badges?: string[];
}
