interface Contributor {
	avatar_url: string
	login: string
}

export async function showContributors($nexasoftContainer: HTMLDivElement) {
	const url = "https://api.github.com/repos/NexaSoft-SAS/ConstructoraColombia/contributors"

	const response = await fetch(url)
	const contributors = (await response.json()) as Contributor[]

	for (let i = 0; i < contributors.length; i++) {
		setTimeout(() => {
			const { avatar_url, login } = contributors[i]
			const img = document.createElement("img")
			img.alt = login
			img.title = login
			img.classList.add("bubbles")
			if (login === "NexaSoft-SAS") {
				img.setAttribute("id", "nexasoft")
				img.src = `${avatar_url}&size=150`
			} else {
				img.src = `${avatar_url}&size=60`
				img.style.left = `${generateRandomNumber()}vw`
				const startRotation = Math.floor(Math.random() * (90 - -90 + 1)) + -45
				img.style.transform = `rotate(${startRotation}deg)`
			}
			img.addEventListener("animationend", () => {
				$nexasoftContainer.removeChild(img)
			})
			$nexasoftContainer.appendChild(img)
		}, i * 300)
	}
}

export function checkAndRemoveContainer($nexasoftContainer: HTMLDivElement) {
	if ($nexasoftContainer.childElementCount === 0) {
		$nexasoftContainer.remove()
		return
	}

	setTimeout(() => {
		checkAndRemoveContainer($nexasoftContainer)
	}, 1000)
}

function generateRandomNumber() {
	return Math.floor(Math.random() * 91) + 5
}
