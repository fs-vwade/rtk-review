import { useGetPartyQuery, useDeletePartyMutation } from "./partySlice";

export default function PartyDisplay({ partyId }) {
	const {
		data: party,
		isLoading,
		error,
	} = useGetPartyQuery(partyId, { skip: !partyId });

	const [deleteParty] = useDeletePartyMutation();

	function partyRender() {
		return (
			<output>
				{error ? (
					error.message
				) : isLoading ? (
					"Getting party details..."
				) : (
					<div>
						<h2>
							<div>{party.name}</div>
						</h2>
						<div>ID: {party.id}</div>
						<div>Cohort ID: {party.cohortId}</div>
						<div>Date: {party.date}</div>
						<div>Location: {party.location}</div>
						<div>
							Description: <div>{party.description}</div>
						</div>
					</div>
				)}
			</output>
		);
	}
	return (
		<>
			<h1>Party Display</h1>
			{partyRender()}
		</>
	);
}
