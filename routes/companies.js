import { Router } from 'npm:express'
import Company from '../models/company.js'

const router = Router()

router.get('/api/companies', async (_req, res) => {
	const companies = await Company.find({})
	res.json(companies)
})

router.get('/api/companies/:id', async (req, res) => {
	const company = await Company.findById(req.params.id)
	res.json(company)
})

export default router
