# Vercel Serverless Fix Progress

## Steps to Complete:

### 1. [x] Code Changes ✅ (src/config/db.js, src/index.js, vercel.json)
   - Call assertDbEnv() in db.js
   - Update src/index.js: Add env validation, remove sequelize.sync(), start server immediately
   - Create vercel.json for serverless routing

### 2. [ ] Setup Vercel Environment Variables
   ```
   DB_HOST=your-db-host (e.g., aws.connect.psdb.cloud for PlanetScale)
   DB_PORT=3306
   DB_USER=your-db-user
   DB_PASSWORD=your-db-password
   DB_NAME=your-db-name
   ```
   - Go to Vercel Dashboard > Project > Settings > Environment Variables
   - Add above vars (no DB provider specified, use your MySQL/PlanetScale creds)

### 3. [ ] Deploy
   ```
   npm i -g vercel
   vercel --prod
   ```

### 4. [ ] Test
   ```
   curl https://your-vercel-app.vercel.app/api/health
   ```
   - Should return { "status": "OK" }
   - Test frontend routes (e.g., /api/skills)

### 5. [ ] Optional Improvements
   - Migrate to @vercel/mysql or PlanetScale for true serverless MySQL (npm i @vercel/mysql)
   - Add sequelize.sync({ alter: true }) only for local dev
   - Run migrations: Create src/database/migrations/ folder if needed

**Notes:**
- Removed sequelize.sync() as it times out serverless functions (>10s)
- DB connects lazily now (works if DB down)
- Static frontend served via rewrites
