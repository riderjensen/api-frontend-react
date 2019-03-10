import React, { Component } from 'react';

export default class Home extends Component {


	state = {
		inputs: {
			firstDate: {
				placeholder: 'First Date',
				name: 'firstDate',
				required: true,
				type: 'text',
				value: '',
			},
			secondDate: {
				placeholder: 'Second Date',
				name: 'secondDate',
				required: true,
				type: 'text',
				value: '',
			}
		}

	}

	handleChange = (val, name) => {
		const newState = { ...this.state.inputs };
		newState[name].value = val;
		this.setState({
			inputs: newState
		})
	}

	render() {
		return (
			<div>
				<div className="container">
					<div className="row">
						<div className="col-md-4 col-xs-12"></div>
						<div className="form-group col-md-4 col-xs-12">
							<div className="form-group">
								<label>Your ID</label>
								<input type="text" className="form-control" id="theSubID" required={true} placeholder="" />
								<small className="form-text text-muted">If you do not have an ID, generate one <a href="create.html">here</a>.</small>
							</div>
							<div className="form-group">
								<label>Subreddit to update (case sensitive)</label>
								<input className="form-control" list="subRedits" />
								<datalist id="subRedits">
									<option value="funny" />
									<option value="AskReddit" />
									<option value="worldnews" />
									<option value="pics" />
									<option value="science" />
									<option value="todayilearned" />
									<option value="gaming" />
									<option value="videos" />
									<option value="movies" />
									<option value="aww" />
									<option value="IAmA" />
									<option value="Music" />
									<option value="gifs" />
									<option value="news" />
									<option value="blog" />
									<option value="EarthPorn" />
									<option value="askscience" />
									<option value="explainlikeimfive" />
									<option value="books" />
									<option value="Showerthoughts" />
									<option value="mildlyinteresting" />
									<option value="television" />
									<option value="LifeProTips" />
									<option value="Jokes" />
									<option value="DIY" />
									<option value="space" />
									<option value="food" />
									<option value="gadgets" />
									<option value="nottheonion" />
									<option value="sports" />
									<option value="Art" />
									<option value="photoshopbattles" />
									<option value="GetMotivated" />
									<option value="tifu" />
									<option value="Documentaries" />
									<option value="UpliftingNews" />
									<option value="listentothis" />
									<option value="dataisbeautiful" />
									<option value="history" />
									<option value="Futurology" />
									<option value="personalfinance" />
									<option value="OldSchoolCool" />
									<option value="philosophy" />
									<option value="WritingPrompts" />
									<option value="nosleep" />
									<option value="creepy" />
									<option value="TwoXChromosomes" />
									<option value="technology" />
									<option value="Fitness" />
									<option value="AdviceAnimals" />
									<option value="WTF" />
									<option value="bestof" />
									<option value="politics" />
									<option value="interestingasfuck" />
									<option value="wholesomememes" />
									<option value="BlackPeopleTwitter" />
									<option value="oddlysatisfying" />
									<option value="memes" />
									<option value="atheism" />
									<option value="woahdude" />
									<option value="leagueoflegends" />
									<option value="facepalm" />
									<option value="reactiongifs" />
									<option value="relationships" />
									<option value="europe" />
									<option value="pcmasterrace" />
									<option value="me_irl" />
									<option value="travel" />
									<option value="lifehacks" />
									<option value="gonewild" />
									<option value="Whatcouldgowrong" />
									<option value="Unexpected" />
									<option value="NatureIsFuckingLit" />
									<option value="Overwatch" />
									<option value="gameofthrones" />
									<option value="dankmemes" />
									<option value="nba" />
									<option value="malefashionadvice" />
									<option value="tattoos" />
									<option value="Android" />
									<option value="trippinthroughtime" />
									<option value="Tinder" />
									<option value="Games" />
									<option value="programming" />
									<option value="AnimalsBeingJerks" />
									<option value="AnimalsBeingBros" />
									<option value="PS4" />
									<option value="instant_regret" />
									<option value="mildlyinfuriating" />
									<option value="FoodPorn" />
									<option value="hiphopheads" />
									<option value="CrappyDesign" />
									<option value="dadjokes" />
									<option value="GifRecipes" />
									<option value="BikiniBottomTwitter" />
									<option value="soccer" />
									<option value="trees" />
									<option value="buildapc" />
									<option value="pokemon" />
									<option value="HistoryPorn" />
									<option value="nonononoyes" />
									<option value="loseit" />
									<option value="pokemongo" />
									<option value="Damnthatsinteresting" />
									<option value="HighQualityGifs" />
									<option value="gardening" />
									<option value="humor" />
									<option value="boardgames" />
									<option value="Eyebleach" />
									<option value="OutOfTheLoop" />
									<option value="nsfw" />
									<option value="sex" />
									<option value="NSFW_GIF" />
									<option value="BetterEveryLoop" />
									<option value="RealGirls" />
									<option value="rarepuppers" />
									<option value="comics" />
									<option value="ContagiousLaughter" />
									<option value="wheredidthesodago" />
									<option value="Wellthatsucks" />
									<option value="xboxone" />
									<option value="BeAmazed" />
									<option value="EatCheapAndHealthy" />
									<option value="Cooking" />
									<option value="trashy" />
									<option value="Bitcoin" />
									<option value="rickandmorty" />
									<option value="AnimalsBeingDerps" />
									<option value="ChildrenFallingOver" />
									<option value="cringepics" />
									<option value="relationship_advice" />
									<option value="Frugal" />
									<option value="cats" />
									<option value="itookapicture" />
									<option value="pcgaming" />
									<option value="hmmm" />
									<option value="4chan" />
									<option value="StarWars" />
									<option value="FortNiteBR" />
									<option value="iphone" />
									<option value="RoastMe" />
									<option value="cars" />
									<option value="photography" />
									<option value="nfl" />
									<option value="NintendoSwitch" />
									<option value="MadeMeSmile" />
									<option value="YouShouldKnow" />
									<option value="hearthstone" />
									<option value="quityourbullshit" />
									<option value="teenagers" />
									<option value="scifi" />
									<option value="wow" />
									<option value="keto" />
									<option value="apple" />
									<option value="confession" />
									<option value="recipes" />
									<option value="HumansBeingBros" />
									<option value="youtubehaiku" />
									<option value="cringe" />
									<option value="blackmagicfuckery" />
									<option value="AskHistorians" />
									<option value="bodyweightfitness" />
									<option value="slowcooking" />
									<option value="FiftyFifty" />
									<option value="MealPrepSunday" />
									<option value="MovieDetails" />
									<option value="WhitePeopleTwitter" />
									<option value="holdmybeer" />
									<option value="reallifedoodles" />
									<option value="streetwear" />
									<option value="woodworking" />
									<option value="NetflixBestOf" />
									<option value="AskMen" />
									<option value="ImGoingToHellForThis" />
									<option value="PeopleFuckingDying" />
									<option value="Minecraft" />
									<option value="iamverysmart" />
									<option value="baseball" />
									<option value="MakeupAddiction" />
									<option value="nevertellmetheodds" />
									<option value="anime" />
									<option value="RoomPorn" />
									<option value="howto" />
									<option value="insanepeoplefacebook" />
									<option value="DunderMifflin" />
									<option value="Roadcam" />
									<option value="learnprogramming" />
									<option value="battlestations" />
									<option value="whatisthisthing" />
									<option value="PrequelMemes" />
									<option value="SkincareAddiction" />
									<option value="DestinyTheGame" />
									<option value="offmychest" />
									<option value="thatHappened" />
									<option value="PerfectTiming" />
									<option value="AskWomen" />
									<option value="PUBATTLEGROUNDS" />
									<option value="DnD" />
									<option value="nintendo" />
									<option value="CryptoCurrency" />
									<option value="dogs" />
									<option value="PewdiepieSubmissions" />
									<option value="shittyaskscience" />
									<option value="comicbooks" />
									<option value="GlobalOffensive" />
									<option value="MemeEconomy" />
									<option value="NoStupidQuestions" />
									<option value="holdthemoan" />
									<option value="GamePhysics" />
									<option value="therewasanattempt" />
									<option value="Awwducational" />
									<option value="TrollXChromosomes" />
									<option value="conspiracy" />
									<option value="frugalmalefashion" />
									<option value="madlads" />
									<option value="youseeingthisshit" />
									<option value="entertainment" />
									<option value="oldpeoplefacebook" />
									<option value="educationalgifs" />
									<option value="urbanexploration" />
									<option value="WatchPeopleDieInside" />
									<option value="MurderedByWords" />
									<option value="ChoosingBeggars" />
									<option value="backpacking" />
									<option value="natureismetal" />
									<option value="raspberry_pi" />
									<option value="AbandonedPorn" />
									<option value="nononono" />
									<option value="hockey" />
									<option value="ProgrammerHumor" />
									<option value="wallpaper" />
									<option value="The_Donald" />
									<option value="femalefashionadvice" />
									<option value="assholedesign" />
									<option value="MMA" />
									<option value="savedyouaclick" />
									<option value="niceguys" />
									<option value="ATBGE" />
									<option value="socialskills" />
									<option value="BustyPetite" />
									<option value="starterpacks" />
									<option value="changemyview" />
									<option value="manga" />
									<option value="drawing" />
									<option value="shittyfoodporn" />
									<option value="horror" />
									<option value="TrollYChromosome" />
									<option value="OopsDidntMeanTo" />
									<option value="math" />
									<option value="legaladvice" />
								</datalist>
								<small className="form-text text-muted">Capitalization does matter</small>
							</div>
							<div className="form-group">
								<label >Instances scanned</label>
								<input type="number" className="form-control" required={true} placeholder="10" />
							</div>
							<div className="form-group">
								<label>Instances found</label>
								<input type="number" className="form-control" required={true} placeholder="5" />
							</div>

							<button className="btn btn-primary" id="submitButton">Rest Call</button>
							<button className="btn btn-primary" id="submitButton">GraphQL Call</button>

						</div>
						<div className="col-md-4 col-xs-12"></div>
					</div>
				</div>
			</div>
		)
	}
}


// document.getElementById('submitButton').addEventListener('click', () => {
// 	const subID = document.getElementById('theSubID').value;
// 	const subNameUpdate = document.getElementById('subNameUpdate').value;
// 	const subScanned = document.getElementById('subScanned').value;
// 	const subFound = document.getElementById('subFound').value;

// 	const newObj = {
// 		"items": {}
// 	}
// 	newObj.items[`r/${subNameUpdate}`] = {
// 		"com": subScanned,
// 		"found": subFound
// 	}

// 	console.log(newObj)

// 	fetch(`https://riderjensen.com/api/update/${subID}`, {
// 			method: "PUT",
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 			body: JSON.stringify(newObj)
// 		})
// 		.then(function (response) {
// 			return response.json();
// 		})
// 		.then((myJson) => {
// 			document.getElementById('subTitle').innerText = `Your item with the id ${myJson._id} was updated`;
// 		})
// 		.catch(err => console.log(err));
// })