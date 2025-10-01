// App.tsx
import React from 'react';


// ==========================================================
// 1. 데이터 타입 정의
// ==========================================================

interface PersonalInfo {
  name: string;
  birthdate: string;
  contact: string;
  email: string;
  address: string;
  photoUrl: string;
}

interface EducationEntry {
  schoolType: string; // 대학원, 대학교, 고등학교
  degree: string;
  score: string;
}

interface ListEntry {
  period: string;
  name: string;
  // Award/Certificate 공통 사용
}

interface CareerEntry {
  company: string;
  period: string;
  description: string;
  role: string;
}

interface ResumeData {
  personal: PersonalInfo;
  education: EducationEntry[];
  certificates: ListEntry[];
  awards: ListEntry[];
  careers: CareerEntry[];
}

// ==========================================================
// 2. 목업 데이터
// ==========================================================

const mockData: ResumeData = {
  personal: {
    name: "피카츄",
    birthdate: "2030. 09. 01",
    contact: "123-456-7890",
    email: "hello@reallygreatsite.com",
    address: "123 Anywhere St., Any City",
    photoUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" // 실제 이미지 경로로 변경
  },
  education: [
    { schoolType: "대학원", degree: "라라나 대학원 졸업", score: "4.5/4.5" },
    { schoolType: "대학교", degree: "라라나 대학교 산업디자인과 학사 졸업", score: "4.5/4.5" },
    { schoolType: "고등학교", degree: "라라나 고등학교 졸업", score: "-" },
  ],
  certificates: [
    { period: "0000.00~0000.00", name: "웹디자인 자격증 1급" },
    { period: "0000.00~0000.00", name: "3D 그래픽 자격증 1급" },
    { period: "0000.00~0000.00", name: "컬러리스트 자격증" },
  ],
  awards: [
    { period: "0000.00~0000.00", name: "라라나 브랜딩 공모전 대상" },
    { period: "0000.00~0000.00", name: "라라나 마케팅 공모전 대상" },
  ],
  careers: [
    { company: "라라나 컴퍼니", period: "(0000.00~0000.00)", description: "디자인 작업 보조", role: "디자인팀" },
    { company: "라라나 디자인", period: "(0000.00~0000.00)", description: "로고 및 브랜딩 프로젝트 디자인, SNS 마케팅 및 브랜딩", role: "디자인팀" },
    { company: "라라나 컴퍼니", period: "(0000.00~0000.00)", description: "로고 및 브랜딩 프로젝트 디자인, SNS 마케팅 및 브랜딩", role: "디자인팀" },
  ]
};

// ==========================================================
// 3. 메인 App 컴포넌트 (모든 UI 로직 포함)
// ==========================================================

const App: React.FC = () => {
  const { personal, education, certificates, awards, careers } = mockData;

  // 인적 사항 테이블 UI 정의
  const personalFields = [
    { label: '이름', value: personal.name },
    { label: '생년월일', value: personal.birthdate },
    { label: '연락처', value: personal.contact },
    { label: '메일', value: personal.email },
    { label: '주소', value: personal.address },
  ];

  // 섹션 제목 스타일 (이미지 디자인 기반)
  const sectionTitleStyle: React.CSSProperties = {
    borderTop: '2px solid black',
    borderBottom: '1px solid black',
    padding: '5px 0',
    marginBottom: '10px',
    backgroundColor: '#f5f5f5',
    fontWeight: 'bold',
    fontSize: '12pt',
    paddingLeft: '5px'
  };

  const resumeContainerStyle: React.CSSProperties = {
    maxWidth: '794px', // A4 사이즈 너비
    margin: '40px auto',
    padding: '30px',
    backgroundColor: 'white',
    border: '1px solid #ddd',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    fontFamily: 'Malgun Gothic, Nanum Gothic, sans-serif',
    fontSize: '11pt',
    color: '#333'
  };

  const tableCellStyle: React.CSSProperties = {
    padding: '8px',
    border: '1px solid #ddd',
    textAlign: 'left',
    paddingLeft: '10px',
  };

  return (
    <div style={resumeContainerStyle}>
      
      {/* 이력서 헤더 */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ margin: 0, fontSize: '28pt', letterSpacing: '5px' }}>이 력 서</h1>
        <p style={{ margin: '5px 0 0 0', fontSize: '10pt', color: '#666' }}>R E S U M E</p>
      </div>

      {/* ================================================== */}
      {/* 1. 기본 정보 / Personal Information */}
      {/* ================================================== */}
      <div style={{ marginBottom: '25px' }}>
        <div style={sectionTitleStyle}>
          기본정보 / Personal Information
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          {/* 사진 영역 */}
          <img
            src={personal.photoUrl}
            alt="증명사진"
            style={{ width: '120px', height: '160px', objectFit: 'cover', border: '1px solid #ddd', flexShrink: 0 }}
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          
          {/* 인적 사항 테이블 */}
          <div style={{ flexGrow: 1, border: '1px solid #ddd' }}>
            {personalFields.map((field, index) => (
              <div 
                key={index} 
                style={{ 
                  display: 'flex', 
                  borderBottom: index < personalFields.length - 1 ? '1px solid #eee' : 'none' 
                }}
              >
                <div style={{ 
                  width: '100px', 
                  padding: '8px 10px', 
                  backgroundColor: '#f9f9f9', 
                  fontWeight: 'bold', 
                  borderRight: '1px solid #eee' 
                }}>
                  {field.label}
                </div>
                <div style={{ padding: '8px 10px', flexGrow: 1 }}>
                  {field.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================================================== */}
      {/* 2. 학력 사항 / Education */}
      {/* ================================================== */}
      <div style={{ marginBottom: '25px' }}>
        <div style={sectionTitleStyle}>
          학력사항 / Education
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
          <thead>
            <tr style={{ backgroundColor: '#f9f9f9' }}>
              <th style={{ ...tableCellStyle, width: '120px', fontWeight: 'bold' }}>구분</th>
              <th style={{ ...tableCellStyle, textAlign: 'left', fontWeight: 'bold' }}>학교 / 학위</th>
              <th style={{ ...tableCellStyle, width: '80px', textAlign: 'right', paddingRight: '10px', fontWeight: 'bold' }}>평점</th>
            </tr>
          </thead>
          <tbody>
            {education.map((entry, index) => (
              <tr key={index}>
                <td style={{ ...tableCellStyle, backgroundColor: '#fcfcfc' }}>{entry.schoolType}</td>
                <td style={tableCellStyle}>{entry.degree}</td>
                <td style={{ ...tableCellStyle, textAlign: 'right', paddingRight: '10px' }}>{entry.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================================================== */}
      {/* 3. 자격증 / License */}
      {/* ================================================== */}
      <div style={{ marginBottom: '25px' }}>
        <div style={sectionTitleStyle}>
          자격증 / License
        </div>
        <div style={{ border: '1px solid #ddd' }}>
          {certificates.map((entry, index) => (
            <div 
              key={index} 
              style={{ 
                display: 'flex', 
                borderBottom: index < certificates.length - 1 ? '1px solid #eee' : 'none' 
              }}
            >
              <div style={{ width: '120px', padding: '8px 10px', backgroundColor: '#f9f9f9', borderRight: '1px solid #eee' }}>
                {entry.period}
              </div>
              <div style={{ padding: '8px 10px', flexGrow: 1 }}>
                {entry.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================================================== */}
      {/* 4. 수상 내역 / Awards */}
      {/* ================================================== */}
      <div style={{ marginBottom: '25px' }}>
        <div style={sectionTitleStyle}>
          수상내역 / Awards
        </div>
        <div style={{ border: '1px solid #ddd' }}>
          {awards.map((entry, index) => (
            <div 
              key={index} 
              style={{ 
                display: 'flex', 
                borderBottom: index < awards.length - 1 ? '1px solid #eee' : 'none' 
              }}
            >
              <div style={{ width: '120px', padding: '8px 10px', backgroundColor: '#f9f9f9', borderRight: '1px solid #eee' }}>
                {entry.period}
              </div>
              <div style={{ padding: '8px 10px', flexGrow: 1 }}>
                {entry.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================================================== */}
      {/* 5. 경력 사항 / Career */}
      {/* ================================================== */}
      <div style={{ marginBottom: '25px' }}>
        <div style={sectionTitleStyle}>
          경력사항 / Career
        </div>
        <div style={{ border: '1px solid #ddd' }}>
          {careers.map((entry, index) => (
            <div 
              key={index} 
              style={{ 
                borderBottom: index < careers.length - 1 ? '1px solid #eee' : 'none',
                padding: '10px 0'
              }}
            >
              <div style={{ display: 'flex', padding: '0 10px' }}>
                <div style={{ fontWeight: 'bold', width: '120px', flexShrink: 0 }}>
                  {entry.company}
                </div>
                <div style={{ flexGrow: 1, paddingLeft: '20px' }}>
                  {entry.description}
                </div>
                <div style={{ width: '80px', textAlign: 'right', flexShrink: 0 }}>
                  {entry.role}
                </div>
              </div>
              <p style={{ margin: '3px 0 0 120px', fontSize: '10pt', color: '#666' }}>
                {entry.period}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* 하단 고지 */}
      <p style={{ fontSize: '9pt', color: '#777', marginTop: '40px', textAlign: 'right' }}>
        *본 이력서에 기재된 내용은 사실과 틀림없습니다.
      </p>

    </div>
  );
};

export default App;