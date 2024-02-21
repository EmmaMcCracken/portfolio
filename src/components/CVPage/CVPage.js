import pdf from './EmmaOatley.pdf'

const pdfURL =
  'https://drive.google.com/file/d/1JvccBCkiV_MnArwREKn2M7JF2bjv4eSf/view?usp=sharing'

const CVPage = () => (
  <div>
    {/* PDF Viewer Component */}
    {pdfURL && (
      <object data={pdf} type='application/pdf' width='100%' height='600px'>
        <p>
          It appears you don`&apos;`t have a PDF plugin for this browser. No
          biggie... you can{' '}
          <a href={pdfURL}>click here to download the PDF file.</a>
        </p>
      </object>
    )}
  </div>
)

export default CVPage
