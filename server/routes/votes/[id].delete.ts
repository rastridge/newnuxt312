import { votesService } from '~/server/services/votesService'

export default defineEventHandler(async (event) => {
	if (okProtectedEndpoint(event)) {
		const id = event.context.params.id
		return votesService.deleteOne(id)
	} else {
		return 'restricted'
	}
})
