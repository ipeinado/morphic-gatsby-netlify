import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled, { css } from "react-emotion"
import { rhythm } from "typography"

import { FaBars } from 'react-icons/fa'

class Header extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			expanded: false,
			minified: false,
		}
		this.handleClick = this.handleClick.bind(this)
	}

	componentDidMount() {
		console.log("Component Did Mount")
	}

	handleClick = (e) => {
		e.preventDefault()
		console.log("Someone clicked the button")
	}

	render() {

		const NavBar = styled('header')`
			background-color: rgba(255, 255, 255, .9);
			border-color: #eee;
			position: relative;
			margin-bottom: 20px;
			border: 1px solid transparent;
			z-index: 1000;
			border-width: 0 0 1px;
			margin-top: 1px;

			@media (min-width: 768px) {
				border-radius: 4px;
			}
		`

		const Container = styled('div')`
			margin-right: auto;
			margin-left: auto;
			padding-left: 15px;
			pading-right: 15px;

			&:after {
				clear: both;
			}

			@media (min-width: 768px) {
				width: 750px;
			}

			@media (min-width: 992px) {
				width: 970px;
			}
		`

		const ToggleButton = styled('button')`
			border-color: #ddd;
			position: relative;
			float: right;
			margin-right: 15px;
			padding: 9px 10px;
			margin-top: 19px;
			margin-bottom: 19px;
			background-color: transparent;
			background-image: none;
			border-radius: 4px;
		`

		return (
			<StaticQuery
				query={graphql`
					query HeadingQuery {
						site {
							siteMetadata {
								title
							}
						}
					}
				`}
				render={data => (
					<NavBar>
						<Container>
							<Link
								to="/" 
								title="Home"
								className={css`
									text-decoration: none;
								`}
							>
								<img 
									alt=""
									width="48px" 
									height="48px" 
									className={css`
										margin-right: 0.5rem;
										float: left;
										margin-bottom: 0;
									`}
									src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAABibAAAYmwFJdYOUAAAAB3RJTUUH4goYESAOJ523GgAAIZpJREFUeNrtnXmYHUW58H/V55zZJ8lkkkwm+2YSOmFNwp6FALLvii1wEZdPQcQFXK+iftflE1Hv9aKi4H1QL0gDoogie1hkC2BIInQ2QjIh+2SZzGT2OV3fH3UGhzDLOaert5nzy1NPkpnuqreq6616a3tLSCkp4B1hWmcCFlCSw2sSaAMagaZ+wgGgTjp2W9j5HGyIggJ4R5jWdGA9YPiYjAvUAWuBdT3/lo69M+wyiCsFBdCAMK2rgVtDFKERpRCvAU8BT0nH3h12ucSBggJoQJjWtcDPwpajBxJ4HViWCc9Ixz4QtlBRJBm2AIMEP02ffBDA4ZnwOSAtTGsF8CTwCPCsdOxCy0f0PlxciXo5JoAFwFeBp4E6YVrfF6Z1WNiChU3BBNKAMK3rgR+HLUeevAr8DrClY9eHLUzQDAkTSJjWTGA8yhZ2fUgi6j1Af8zPhJ8I03oY+F/gQenY7WELFgRx/nADIkxrvDCtO1HThcuAZcK0inxIajCUYxI4D7gX2CRM63phWuVhC+U3g+HDvQdhWiXCtL6BqviX9/jVYuA7PiSZCDvPmqlFmXSbhWl9XZjW8LAF8otBpwDCtC4B1qAqem8t2BeFaZ2iOdlBV44ZRgHfRQ2avydMa1TYAulm0Hw4YVqHC9NaBvwBmDJAnn8nTKtKY/KDphz7YDjw7yhF+E9hWuPCFkgXsf9wwrSqhWn9ArUKmm3LPgH4lUYxBpsJ1BdlwOeBDcK0viZMKxW2QF6JrQII00oK07oO2ABcQ+6V8IPCtD6iSZzYlmOelAHfB1b7YE4GSiw/nDCt04CVwH8DXkyZW4RpTdMg0lDpAQ5lNmpm7S5hWmPDFiYfYqUAwrSmC9N6AHgcmKMhykrgTmFaXitwrMrRBy4D1gnTuk5DWQZKLD6cMK0KYVr/D3gDuEBz9CcAN3qMIxbl6DPDUD3yK8K0FoQtTLZE+sMJ0xLCtK5E7bX/KlDsU1LfEKZ1gof3Y9Xq+czRwPPCtG4QpiXCFmYgIqsAwrTmAy8Cv0UtzPhJAmUKVeb5fmTLMSRSwI+APwvTGhm2MP0RyQ8nTGsy8ARwXIDJTgNuyfPdIb+rsg/OA17z2Lv6SiR3gwrT+gBwX0jJf0g69r1ZyjkCuB7vY4h3UTPBYO68BE2Nkn27JfvqXRr2SFw/tvEFQyfwNeAnUTuHEFUFmIXazhCGDbkfOEI69tZe5DJQ++rPyITj0Gz/p4rgyz8qpbT83Vl3XWjYq5Rhz07J22+61G1I07Avet+vH/4CXCUde1/YgnQTSQUAyEx36p7xyZaXgPOlY9cL05oAvB9V4U8DfLVpx040uPZb2TuWaNwvqdvgUvdmmi0bXHZudYnoJ+2mDjhLOvaasAWBaCvA8ahBcFg0o9yRBLrvpXaiwadzUIBDaTkoWfNamtdfTfPWmnRUzaa9wDnSsZeHLUhkFQBAmNYzwKKw5QiSsR4VoCetzZK1KzPK4KRJp8PO3btoBi6Wjv1YmEJEXQHOBh4KW44gGTvR4NPf1L/c0dYiee3FNC892cX++sh8807gSunYdlgCRFoBAIRprUZ5NxgS+KUA3UgJa1emefGJLjavj4R95AKflY798zASj+Q6wCH8MGwBgkb6GBAw++gEH/1SMVffWMyRxydIhLuObQA/E6b17bASjzo2sCVsIQYjtZMMLv54Edd9t4TDj00gwt248C1hWj8NOtHIK4B07C7i63IkvzzLYMOIasElnyjik18vZtrsUKvEZ4PuCSKvABl+jZo6K+AjtZMMrry+mCs+V8TYCaFVjW8J07omqMRioQDSsVuIlu/NQc2MOQk+dWMx516Rosi/8Xh//CyzHcZ3YqEAGW4BWsIWIgiCNoF6CwDzFia55lslTJ4ZeDUxULtzfT9uGRsFkI69F/ifsOUYaoyoFlx1fTFnXpoiGewR+GLgAWFaR/mZSGwUIMOPga6whfAbP6dB8woCjj01yaduLGH81ECrzDDgEU3ntnslVgogHbsOuCdsOYYq1TWCj325mBNOD9SlbA1KCYb5EXmsFCDD4F8YC3sA0E8QQnL6JUku/ligJtH7UDOB2tGqAMK0JgjTmupnSUjHXg00+JlGmEyYJsI3ebIIc45NcNWXihg+MrDVsw/6MT2qbS9Q5vD6r1HnQVcANwH3S8fWugdRmNYi1CUPkT9w3RfJFCRT7xV/umlw2iVJhlXFJ2stTZI/3N5JXTD7itqB46Vjr9QVoRYFyDhFWo/ys9OTjajD0b/RccVnxt3GY8AIXQXgB1WjBGMnGdRMEFQMF5RXCMoqoaxS/btIz27nyOC68NCdnax6MZD91huAedKxm3REpksB7gCu6ueRXcBPgVulYzfkmcaJwMOomYHIUFImmHaYQe1kQe0kg7GTBCWl8WnBtSHhYbuTfzwbiBLcLR37Mh0ReVaATKu8nOxMkibgl8B/ScfenkMai1DnAip0ZNorw6oEM48wmHlUgskzDYw4TiX4xOP3dfLyskCU4JPSsW/3GoknBcg4PnoBOD7HVztQV/HcLB173QBpnAo8iHLIGhplFYIjT0ww+2iD2klGjEcg/rPsT1289LjvyzWtwALp2G94icSrAlyBqsj54gIPADdJx365l/jPBP4EhGY1jx4nWLA0wZwFiaBXQmPNMw928cIjvvcEzwMLvbhayVsBMvdHrUffofGngR9Ix340E/+FqLMAgW/HEgJmzDVYcEqCybMK9k2+PPnHLl5+0ncl+Jh07DvyfdmLAnwPdWuIbjYCu1FOawNn8iyDpRcnqZlQsHG8IiX86fZO1q/ydYq0HpglHXt/Pi/npQCZxa41hNA6+8XIGsEpFyaZcXihxddJZwfc/dMOdtT5evb8l9Kx81oky1cB/ghc5GeOgqK0XHDS2QmOWpgozOb4RHOT5H9v7qTRPy92LmqB7JVcX8xZAYRpLQWe9CsnQTLlMIOzr0xQXlkwd/xm707JXT/upL3VtyReBY7L9SL0nBQgc/vHSmCub9kIACMBC89LsGBpojCdGSCbHJf7f9mVcU/hC5+Wjn1rLi/k2ulfTcwrf9VoweU3pFhwaqHyB81U02DeEl99sHxPmFZ1Li9kvbE7c9HBf/gpvd/MPNrgzMuSpIr/deyvQLAsPC/BlnUu9dt9+QBVqGtcs3ZXn0sP8B/47BnZT45ZkuDcq5Iki8PfSjyUg5GEs69K+rmoeF0uh2eyUgBhWnNR5k/8ELDowgSLL04gRfgVoBBg5FjBogt9M4WGA5/JunpkMwgWpvUEcKpfEvuFkYD3X55g9rzC/GYU+fNtXWx6wxdTqB6YknGn0y8D1gxhWhcRw8qfSMIFn0wya54ReotXCL2HpZcmSBb58vlHA5/M5sF+ewBhWsWAg7pALjYIA865KsH0Iwotf9R5+XGXFx/yZb/QNmC6dOz2/h4aqIZcS8wqP6iWZdoRhZY/DuGYUwyGV/syHz2e/g9pAQMrwOl+SOYnJ5yTwDzOCNt5QiFkGYwELLzQt576K8K0+p3qHyjlv4VSi/PkyMUG804TyMKfWP2ZMlcwabYvvcBU4Oz+HuhXAaRj3wLcgDqNH2kmzBScdEHB7IlrWHiRb0dLr+zvl9lOgx4J3AXM8UVEj5RVwqVfTFJW6T2uAuHx5O/TrHt14PqYI+1AbV/nBbLSOenYq4D5KA/NkUIIOP2KRKHyDwKOOdWXs9bFwKV9/TKf7dBnAncAYwMun16Z/36DBWcUpjsHC4/ckWbT69p7geelY5/c2y/yPRAzGuWq/LzAS6gHNZMFF15nhH23VQGN7KqT/Om/fTlCOUM69sZDf5hX0ykdu1469vmo/UGhXFohDFh4iar5YU/lDdng6o9zzCRB7XRfWrQreq1HGhxjzUINkOf5W+XfzdyTBSf6N39coBe2vynZvQXqt0r2bJW0NMLIWsGoCTB6gmDcDMGwnHbj987WdZK/3a69F9goHXvGoT/U5Roxhdou/WUCcLleWgmXfiUx6HxsRpXmBnj2Ppet6/qvK0YC5p9pcMQS4dksvecHaRr3aM/KSdKxX+j5A603xQvTWoxylDVRu+g9WGIZzJhXMPyDYN1yyUt/denMwbVxzRTBEsug0kNvsOJxyYrHtPcC35OO/Y2eP9CqAADCtEYAtwKWbukBqsfDBZ8rmD5B8MZzkuUP5lc/SsrhohsMSvP05tq0F+67SbsCvCAd+6SeP9Bek6RjN0jH/jDwW91xAxyxNB4XSMQ9NNTDqw/n3zi2NcPz98u806+ohjGTtVefBRmPhu/gZ1N6r+4Ih4+GSXNE+LMfgzy4afj7PS7pTm/fa8sbko0rZN5yTDtGu5mbAt61HuCnAtTqjnDuKQIplBekQvAvvLlCUr9Fzzdb/qAk7eYnx+QjBIb+k5NLe/7Hz+v+ztAZWUUVTD1Ktf4F/GV3nb642ltg3w4YmYcL5aJSGDdTsHWN1o/+rsu3fekBMg60TtMZ56yTBBhhb9wdGn/2btPbyuzdlr8stTO1V89jenqN8KsHWIDy0aIFIwFTjgK30Pr7jpuGhp1649y7VTJtfn72fM107VlMAIuAv4J/CqDV/Bl/GBSVq9mBAv7SfEApgU6a9uX/7SpHQ+kwaG3UKtIpxEkBps0v2P5BUTYcEik8zwD1ZNhoPH2/mumw+TWt2VzQ/Q/tCpBZCDtWV3ylw2DMDDUrUCAADKiqhT2aZoEAqiYIT99vzHTB5te0toCzuv/hRw9wGsrO0sKkIwEhCz1AgFSN16wA4719vzH6/ZKMEaZVJR17vx+zQB/SGdnoqeGvig61MOY9eybzp3SYWtX1Ik/JcCjXNqXyDrNAQw+QmfIcjVr4+hDwAW0iCqiaWJj9CZqaWVB7GOxY4z2uoy/ImK8ev2HlGGjerzWbs4GXelWAzP2/1UAN6uhj99+9/Xs0Pq0nDBsDyRJvA6gC+XHU+bBnM3R6uNFlynyomann+1WOhp3rvMfTA9UDCNMaB3wBMPlXpR6D2jcRKiMnFaY+w6K4Ao48F179A3l9hPKRMPcsfd+vcrT2LM4GZQLdBSzRHr0GRk6SBfMnRMYdDieWw2t/ErQeyP698YfD4edIjJQ+87V8FGh2GfHOGGCxzlh1UlXoAUKnehosvlbyxsOCtweYiy8qhyPOk9Sa6v86v125/h5ghjCtZJKI3pRVUgmlIwr2f/fBcx92RWZNshiOvFAyYyHs3woN2wQHtkNbEwyrgRHjJcPHwciJ/o3ZksXKLGs/qC3KFDDZz92gnqiaOLRa/5Z9sHMtHNwjaG9Slau9CTqaVYVKlapGobgiEyqhrEoyegaU6Z8i7JWyahXGH9n3l/Hzm5VXa1UAgKrIKkBp1eCf/mzcAbvWCnathaZd/T/b2apC0+6eP1Wdd3k1jJoBo2dIRk5RWxkGI6lS7VFWRlYBUuVqO+xgZM9GwfrHBY2adl0271WhbrnASELNbMn0RZKKMWHnVC/JUtBssUdXAYrKBp/937gD1j8h2PuWf8Mutwt2vC7Y8bqgxlSKUFkTds71kCzWHmV0FSBZNng2wHV1wNqHBDtWBzvfsMsR7HIEY2ZLpi2JvyIkh5QJVDY4NsC17oeVtkFzfXgy7F4rqF8vmL5EMuXk+BbqkOoBUoPABNq/WfDPPwhP2wl0IV14c5lg32aYc6GkqNxzlIGT1O8JMLoKkCiTsTaBtq8QrH9YICOWiX1vCZbfJjAvcqmaEq8WxiiCITEITqTASMa3B9izXrDuoeh6r+s4CKvuNJh4gmTyyS4Jf+7q1c6+TdrHUNFUgGRJfBfBmusFax7wVvmTJVA6UlJcAUWVyhV8e6OquO1Ngo6DeO5ZpIQtLwh2rk5QNU1SWiVDXW3uV1ag8W3B3g3aFaA8kgrgpuO5CNbZAq/fY5DuyP3dkhEwarZk5EzJsAmyf+/KEhq3C/auU6F1X/4ydxyEXasFEd0R4zcikgqQ7gA3hn3Amj8maGvI7Z2iCpi40KXmKBeR6Ti6T0L1iYCK8ZKK8TB5KbTsEdS/LtjxsqH1MPtQIJIK4HZBOs07FSIO7HlDcKAut1Z03HEuExe5GKlMpc9T50uqJRMXS8bOd3n7WYPdK43Yjp+CJpIKAGrxKBGTCzDcNGx5OnttNZIw7Zw01XNULdU1UZQohylnudQcK6l7zOCA/kHjoCOyCtDZAUL/wocv7HzFoP1AdpUtUQyzLktTPta/wz7FIyUzP5Rm69MGO16KUTcaAtFVgFZIVkS/H0+3wfYXsqxkAqae30VpTTAn3cYtSVMyWlL3cAK3K9xyiiqRVYDW/YLi0dFXgPpVBuksrw8avyRN5fRgF/hGzHEpGil5855k1nIOJSKrAG174zEV2rAhu9a/bJxk1LFuKHkqGSuZfEEXm+5NFgbHhxBhBRCRV4CuFmjelp3tP3ZxOtT8lE+W1J6aZvsTEV3tConoKsA+Efm1gAMbjayWrCunu5ROdEPf21R1TJrWesH+VYWBcTdJ4C1Av/dFj3Tsi34P0JSl+TP88HBMn96oOa2L5i0pOvYXpkhBeXS7FtB4KY4e0m3Q3ihCvy+rv9CyfWAFEEkoneKGLmt3kAaMWqj5AoD4kk5Kx34EmCJMq5K+3SAe+rNA9g821wmGzY1I03kIMg3ploGfK5viQjJaA/rymS4ltZK2HUO+F7j/nTGAdOwmoAnYMNBbwrSqeK9i1AIXA9p8CzfXGVTMjWZr1XUwu8pTPNaN5FimekkX2+6OpfuIxwCvbnsl8Bfp2MvyGgRLx94P7D9UEGFaNwKr6XEBgRdat0R3HNDRlJ0CGOXRav27KRrnUjLBpW1rrAbEN0rH/q7OCLXmXjp2B/AzXfGlmwXte5QSRC10ZemgySiXocvaVyidHva8VG7VAY11qxs/pkEf1RlZS51BZXX0zKCu1izt56LoercomeHCM2FLkTXLpWM36I5UuwJIx94gTGsTMFVHfC3rDMqPjt5GFlGanV3TUQ+p2gjaQIAxTJIaJencE4vBsNaG9Z0yiLqwHTsMOhqiNx0qstyo17HTCF3W/kLx9Oj1rn3giwL4tRL8KHC1rshanAQVJ0SrFxDlWSrALiOSg+BuElURFu5f7ANe8SNivxRgGdClK/62tQnKjo+YApRJ1X8OYOB37RWkO0BomHF0mwXpA4LUWFdb352tIofME9KxfRlK+aIA0rEbhWm9CCzUEV/6gKBjuyA5LkLDSQNS41063x6gJko4+GKS8kXeDuvKdkHD74twWwRGqaR0QRclOsZG5REq077xxfwB/8YA2oVuXZkMfdrw0JCalp393LYyScc2w1Nara8ncFvUYNVtFTQ/m6LpsSLPeSAePcBjfkXspwK8rDOyjjcTdEVsMJzIUgGQ0PxEEemu/NNqf+O9nXXHmgQdmxLe9galouob5B12Scfe6lfkfiqAxuuWAQltr6ZCb/Xf1XpWSBJjszMh3AZByxNFyuVLjum0r07i9rF7s/XpVF5xvhM6QUZreHUoVcK0fLvpwBcFEKZ1AfBD3fF2rk2QbgJXysiE1HHZ2/Zd6xO03F1C53aRdfyddQZtz/Q9gnabBB1rEnnLn+2KdogUAX8WpjXBj8i1KoAwrTJhWr8CHgAqtEvrQseKVOimz7vWAyamMSZmP5fuHhC0/bGE9hdSuJ39xJ2G9pdTtD1UPOChG7fFg2nYHItFsOOB1cK0LtUdsZCaDokK05qHunNYy0a4PklA0YdbEcOjM3iTeww67snDiZEAMdLFqHERY1zESBfZaCD3CtyNSWRjlq5WDu8iuSgPf4yAuyFB52Mx8T+j+C1wXWb3smc8K4AwLQP4EvAdArpdXkxKkzyvPYiksib9Ygp3RTjbi43ZXSROzVMBViVJPxcT99D/4i3gCunYL3qNyJMCCNOaCPyOEG6aN85oR0yP0OhNgvu3EmRd8IfOjcXtiDn5lYX7QhFyZSzPBaSB7wLfkY6d936OvMcAGXtsFSFUfgD3+SJcL7MfugPAae1QFfDCUpFETkvnLbfcH6vzAD1JAN8C/i5MK+8z7TnnXphWpTCt3wD3AAFd0dwLBwXy1aJ3PClHIhRJOKctWCU4qQNZIvOTtwvYFns3KScAK4VpfSSfl3MygYRpHY8a6EbDi4QAzm2D8RHb0dgh4Mli8NscmtcJC/Kz/QHYlIBHY+KBODvuAz6VObGYFVkpgDCtBPB14Eai5kuoVMIHWqAsOrNCgGpiXymClUX6r7sRwMJ2OMzjZQBPlcD6aH1ODWwFrpSO/VQ2Dw+oAMK0pgJ3AieGnbM+GZeGc1ujecnJPgNeKoa3NfUGI1w4ud17ryeB35VDWxQLzTMu8CPUGeJ+u8h+FUCY1mxgOTAs7BwNyDEdMN+DOeA32xPwahHszFMRiiXM6wCzU8/y5fYE/FX/zdMR4zlgqXTsPrvKgfq/LxCHyg/wWhFUuzA1QlOjPRmXhvNboUXAliRsTqoBaH8NeYmESV0wJQ0TuvQan28NOtOnN04GPgj8vq8HBioF33bhaUcCy0rgrBaojdiguCelEmZ1qADQKpRSNBvKHCmWajxT7qpne1oousYSBw1YF8u5/3x4q79fDmQCVQHrgVFh5yJriiSc2wIjY3HQIxyeKYENQ0IBnpGOvaS/B/q1JjPTSTeGnYuc6BDwSJlq5Qq8l30GvDkkKn8a+NxAD2VTS25HeXuLDy0CHi6FJqGuXiyEf4WXB95dOki4XTr2qoEeGlABMvssBtSkyHHAgL+UqxYv9CXiiIRtSdg6JAa/DWRpuWRlJ0jHfhr4Q9i5ypkWAQ+V5z/1OJjoFLB8UK369se3pWPvyebBXAzlLwLxu2atQ8Cj5bA5FX4LHGZ4phTiu/EtF9YAP8/24axLRDp2HXBz2LnLizTwVCmsKM5sgRxi4R/Fau1haPB56dhZLwbl2iT8gDitDfREAquKVW+QrWPbwcCmFKyO1YkvLzwoHTsnFyo5KYB07Bbgy2Hn0hM7k/BgJWxPhm+W+B32JOC5Qb/doZsO4IZcX8rrRJgwreeAk8LOsScEYLbDke2QHITzgvsS8OSQ6u1+KB37K7m+lK9h+DmU46v4jqok8EaxGhzPb4XJHrcWR4m6FDxfBl1DpvLvRB2PzJm8zwQL0/o18HEfMuOi7iob7kPcfTOuC45tgcqYb6FYVQKrh8x0ZzcflY79m3xe9NKC/zvQqDETO4GvAiOBapSXieDYnoS/DIOXS9XGtLDt91xDp4BnyqNY+TuBz6IuUvwQ8A/N8b+CcpWSF169QtyAOnjghTdR06u/lY79Ll8nwrS+jTr4HCwGMLUd5rTDsAjvLO1mdxJeKYP9kVvw6wAulY79554/FKZ1GqqxO9Vj/BI4UTr2S/lG4FUBUsDrwMw8Xv8HcBNwf3++34Vp/QDIeXCjBQFM6oBZ7TA6gucMDiRgZSlsjeTmtjbgYunYD/f1QMaZ2ldR1+vmY43cKR3737wIqcMx1jnAX3N45XHgJunYT+aQxn8Cn/ckqFcqXJjSoXqGsMcJrQb8swQ2RnZjWwtwfrbfWJjW+1DO1a4Esl20aAZmSsfe7kVQLa4RhWn9DTirn0fSwP2oir8izzRuReO1S54Y1QWTO2BsFwwP0ETam4QtKdhQHOUZnibgHOnYf8/1RWFataiG7moGPon4denY3/cqrC4FmAX8k/e6RmxDDVBulo690WMaAvgf4KOeBdZJiasUoaZTBZ03rrjA7hRsLVJmTmvkZ50PAGd6sckBhGkNB65BKUNNL49sAg47dMyYV1oaneN+E/i/PQriF8BPpWPv0pIA7/ghvRe4RFec2imSUJlWg+dhaWUuVaTVz5MSUvK93ivaharcPcOBBOxIqdmdeNACLJKOrW2WR5hWCfARlHk0PfNjCVwoHftBLWnoUoCMwIuBEcAyXd57e0ljMrDZj7gDIyHVEqQhod0gsjdp58YvpGNf60fEGb9UFwNHourWMm1x61SAIBCmtQDN1y8V0MIfpWNHt2fug8gblb3gSytTwDPnZbyFx4pYKUCmgC8LW44CvZIij92YYRMrBQCuJ6BLOArkxSeEaVWHLUQuxEYBMgX7f8KWo0C/lAOfCVuIXIiNAqAKtjxsIQoMyHXCtGLznWKhAMK0yoDrwpajQFZUA58IW4hsiYUCoEyfWNmWQ5wbMhslI0/kFSBTkNeHLUeBnJgIfDhsIbIh8gqAKshJYQtRIGe+ktm/FWkirQCZAgznLEABr5jAeWELMRCRVgBUAZphC1Egb74atgADEXUFiHwBFuiXE4RpLQpbiP6IrAJkCu6EsOUo4JlIN2KRVQDCtf2bUfejnQV8A/g7EMFDwX2yH3Vn7ieA0/DgNUEDZwnTOiLsAumLSG6HzhTYgJcb+MiFvXgyGAYsBc7IhKkhyncoadQW8Ucz4ZXMvQ495b8bsEKS7/fSsS8Pt4h6J6ougy8KMe3bDq38ANKxG4EHMqH7IPcZwKeBw0KS9X7ABp6Qjt0wwLPXoNxZhrFl+eIQ0syKqCpAQ0jprkOZPgMiHXsDsEGY1m3AWoLvEb4vHfvr2T4sHbtBmNa/AcsI3vRtCDi9rInqGODn9HO3q090ApdnPGBnTeYm8vsClpV80pSO/Qzww4Dl3Ia6qzeSRFIBpGN3ZWzGxcDKgJK90cOB7h0BydiTnXm+9030uyfsjTaUw9pZ0rGfC6xUciSSCtCNdOxngXnAp4Cs7nzKk6fxdvtNvpUxX1ygPp8XpWN3ApejvDj4xf0otyU3SsduDrhsciLSCgAgHduVjn0b8D7gv9A/HbkfuLI/94xZELQC1B86y5ML0rHX4c8Gw9XAUunYH5COvTngMsmLyCtAN9KxG6RjfwE4HDXVp4urpWO/7TEObb6PgkpPOvavgL9okmcvajbsGOnYTwVcFp6IjQJ0Ix17rXTsM1H7hDZ4jO630rHv1SBW0D2ArvQ+7jGuLuAW4H3SsW/10iuFRewUoBvp2H8F5qLuLMvHCddbaDplJh17P8oVeFBoUQDp2PXk72ryCeAo6difzeQ/lsRWAUBNQUrHvhk1PriD7H0ld6GmPHV6rwvSDNKWlnTsR1CteLZsRK2Uny4d+40A8+wLsVaAbqRj75KO/THgWODFLF75jlcHrr0QpBmkO60vAwNV5oPA14A5va2Ux5VBoQDdSMd+FbXcfwVqAaY3XgC+50PyQfYAWhVAOnYbamq0N2/LEvgdyhf/D3R4ZI4Sg0oBAKRjS+nYdwGzUBW9rcevG4ErfBqsBdkDaFc26dirUPe+9WQ5cLx07I9Ixw5jsc93Bp0CdCMdu1k69jdQG9VuQU2dLpGOvcmnJONsAgEgHfsnqN7z9szfJ0jHHtSOiCO5HTqOCNP6DLkNJr0wWjq2nyvjQ4ZB2wOEQFA9QCdq4amABgoKoI+gFGC3dOxCt62JggLoI6hZoKC3XQxqCgqgj6B6gKC3XQxqCgqgicyq8jbPEQ3MP8PO62CioAB6+QJQ51PcErX/5kdhZ3Iw8f8BblDOGppGS6EAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMTAtMjRUMTc6MzI6MTQrMDI6MDBJ1yPdAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTEwLTI0VDE3OjMyOjE0KzAyOjAwOIqbYQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAASdEVYdFRpdGxlAE1vcnBoaWMgTG9nb26e8D0AAABXelRYdFJhdyBwcm9maWxlIHR5cGUgaXB0YwAAeJzj8gwIcVYoKMpPy8xJ5VIAAyMLLmMLEyMTS5MUAxMgRIA0w2QDI7NUIMvY1MjEzMQcxAfLgEigSi4A6hcRdPJCNZUAAAAASUVORK5CYII="}
								/>
								<span
									className={css`
										font-size: 1.6rem;
										font-weight: bold;
										letter-spacing: rhythm(1/2);
										text-decoration: none;
									`}
								>
									{ (data.site.siteMetadata.title) }
								</span>
							</Link>
							<ToggleButton onClick={ this.handleClick }>
								<span className={css`
									background-color: yellow;
								`}>
								Toggle navigation
								</span>
								<FaBars />
							</ToggleButton>
						</Container>
					</NavBar>
				)}
			/>
		)
	}
}

export default Header