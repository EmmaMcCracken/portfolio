const pdfURL =
  'https://drive.google.com/file/d/1JvccBCkiV_MnArwREKn2M7JF2bjv4eSf/view?usp=sharing'

const CVPage = () => (
  <div id='top' className='light app' style={{ height: '100%' }}>
    {/* PDF Viewer Component */}
    {pdfURL && (
      <object
        data='/EmmaOatley.pdf'
        type='application/pdf'
        width='100%'
        style={{ height: '100%' }}
      >
        <p>
          It appears you don&apos;t have a PDF plugin for this browser. No
          biggie... you can{' '}
          <a href='/EmmaOatley.pdf'>click here to download the PDF file.</a>
        </p>
      </object>
    )}
  </div>
)

export default CVPage
