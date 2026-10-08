#!/usr/bin/env bash
# Read-only checkout doctor for apm-alarms verification.
set -euo pipefail

ROOT="$(git rev-parse --show-toplevel 2>/dev/null || true)"
if [[ -z "${ROOT}" ]]; then
  echo "doctor: FAIL not inside a git work tree" >&2
  exit 1
fi

cd "${ROOT}"

sanitize_remote() {
  # Strip credentials from https remotes: https://user:token@host/path -> https://host/path
  sed -E 's#(https://)[^@/]+@#\1#'
}

remote_url="$(git remote get-url origin 2>/dev/null | sanitize_remote || true)"
if [[ -z "${remote_url}" ]]; then
  echo "doctor: FAIL origin remote missing" >&2
  exit 1
fi

case "${remote_url}" in
  *github.com/aialuke/apm-alarms*)
    ;;
  *)
    echo "doctor: FAIL origin is not aialuke/apm-alarms: ${remote_url}" >&2
    exit 1
    ;;
esac

if [[ ! -f README.md ]]; then
  echo "doctor: FAIL README.md missing" >&2
  exit 1
fi

if ! grep -q 'apm-alarms' README.md; then
  echo "doctor: FAIL README.md does not mention apm-alarms" >&2
  exit 1
fi

branch="$(git symbolic-ref --short HEAD 2>/dev/null || git rev-parse --short HEAD)"
head_sha="$(git rev-parse HEAD)"
status="$(git status --porcelain=v1)"

echo "doctor: OK"
echo "checkout_path=${ROOT}"
echo "origin=${remote_url}"
echo "branch=${branch}"
echo "head=${head_sha}"
echo "readme_bytes=$(wc -c < README.md | tr -d ' ')"
if [[ -n "${status}" ]]; then
  echo "working_tree=dirty"
else
  echo "working_tree=clean"
fi

if [[ -n "${EVIDENCE_DIR:-}" ]]; then
  mkdir -p "${EVIDENCE_DIR}"
  {
    echo "doctor: OK"
    echo "checkout_path=${ROOT}"
    echo "origin=${remote_url}"
    echo "branch=${branch}"
    echo "head=${head_sha}"
  } >"${EVIDENCE_DIR}/doctor.txt"
  echo "${remote_url}" >"${EVIDENCE_DIR}/remote.txt"
  cp README.md "${EVIDENCE_DIR}/readme.txt"
  {
    echo "branch=${branch}"
    echo "head=${head_sha}"
  } >"${EVIDENCE_DIR}/head.txt"
  echo "evidence_dir=${EVIDENCE_DIR}"
fi
