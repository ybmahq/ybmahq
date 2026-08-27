import { useState } from 'react'

function App() {
  const [visitors, setVisitors] = useState(1)

  return (
    <>
      <center>
        <table border="1" cellPadding="6" width="760" bgcolor="#c0c0c0">
          <tbody>
            <tr>
              <td align="center">
                <font face="Times New Roman" size="7"><b>YBMA</b></font>
                <br />
                <font face="Times New Roman" size="5">YBMA HQ</font>
                <br />
                <font face="Times New Roman" size="2">
                  <i>"Welcome to the official website of YBMA."</i>
                </font>
              </td>
            </tr>
          </tbody>
        </table>

        <table border="1" cellPadding="4" width="760" bgcolor="#d4d0c8">
          <tbody>
            <tr>
              <td align="center">
                <font face="Times New Roman" size="3">
                  <a href="#home">HOME</a> | <a href="#about">ABOUT</a> |{' '}
                  <a href="#businesses">OUR BUSINESSES</a> |{' '}
                  <a href="#contact">CONTACT</a>
                </font>
              </td>
            </tr>
          </tbody>
        </table>

        <table border="1" cellPadding="10" width="760" bgcolor="#ffffff">
          <tbody>
            <tr>
              <td>
                <font face="Times New Roman" size="4"><b>WELCOME TO YBMA</b></font>
                <font face="Times New Roman" size="2">
                  <sup>NEW!</sup>
                </font>
                <br />
                <font face="Times New Roman" size="2">
                  YBMA is a company with interests in Technology, Agriculture,
                  Real Estate and other ventures.
                </font>
                <br />
                <br />
                <font face="Times New Roman" size="3">
                  <b>CURRENTLY FOCUSING ON: TECHNOLOGY</b>
                </font>
                <br />
                <font face="Times New Roman" size="2">
                  We are currently building things. Please check back later.
                </font>
                <br />
                <br />
                <font face="Times New Roman" size="2">
                  Technology Business: <tt>[########------]</tt> UNDER
                  CONSTRUCTION
                </font>
              </td>
            </tr>
          </tbody>
        </table>

        <table border="1" cellPadding="10" width="760" bgcolor="#ffffff">
          <tbody>
            <tr>
              <td align="center">
                <font face="Times New Roman" size="4"><b>OUR BUSINESSES</b></font>
                <br />
                <br />
                <table border="1" cellPadding="6" width="100%">
                  <tbody>
                    <tr bgcolor="#e0e0e0">
                      <td align="center">
                        <font face="Times New Roman" size="2">Technology</font>
                      </td>
                      <td align="center">
                        <font face="Times New Roman" size="2">Agriculture</font>
                      </td>
                      <td align="center">
                        <font face="Times New Roman" size="2">Real Estate</font>
                      </td>
                      <td align="center">
                        <font face="Times New Roman" size="2">More Coming Soon</font>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>

        <table border="1" cellPadding="10" width="760" bgcolor="#fffbcc">
          <tbody>
            <tr>
              <td align="center">
                <font face="Times New Roman" size="4">
                  <b>&#128679; UNDER CONSTRUCTION &#128679;</b>
                </font>
                <br />
                <font face="Times New Roman" size="2">
                  "YBMA HQ is currently under construction. Our webmaster has
                  been informed."
                </font>
              </td>
            </tr>
          </tbody>
        </table>

        <table border="1" cellPadding="6" width="760" bgcolor="#c0c0c0">
          <tbody>
            <tr>
              <td align="center">
                <font face="Times New Roman" size="1">
                  &copy; 2026 YBMA Ltd. All Rights Reserved.
                  <br />
                  Visitors:{' '}
                  <span
                    onClick={() => setVisitors((v) => v + 1)}
                    title="you found the button. congratulations."
                    style={{ cursor: 'pointer' }}
                  >
                    {String(visitors).padStart(6, '0')}
                  </span>
                  <br />
                  Best viewed in 1024x768
                  <br />
                  <i>Last updated: probably today.</i>
                </font>
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    </>
  )
}

export default App
